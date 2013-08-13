set :stages, %w(production staging)
set :default_stage, "staging"
require 'capistrano/ext/multistage'
require "rvm/capistrano"

#before 'deploy:setup', 'rvm:install_rvm'
#before 'deploy:setup', 'rvm:install_ruby'
#before 'deploy:setup', 'rvm:create_gemset'

require "bundler/capistrano"
set :application, "spree"
set :user, 'spree'
set :group, 'www-data'
set :rails_env, 'production'

set :scm, :git
set :repository, "git@github.com:FluxAugur/sfi.git"
set :branch, "master"
set :scm_verbose, true
set :git_shallow_clone, 1
set :deploy_to, "/data/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false

default_run_options[:pty] = true
default_run_options[:shell] = '/bin/bash --login'
set :ssh_options, forward_agent: true

namespace :foreman do
  desc "Export the Procfile to Bluepill's .pill script"
  task :export, roles: :app do
    run "cd #{current_path} && bundle exec foreman export bluepill /data/#{application}/shared/config"
    sudo "bluepill load /data/#{application}/shared/config/#{application}.pill"
  end

  %w[start stop restart].each do |command|
    desc "#{command} the application services"
    task command, roles: :app, except: {no_release: true} do
      sudo "bluepill #{application} #{command}"
    end
  end
end

namespace :deploy do
  desc "Symlink shared configs and folders on each release."
  task :symlink_shared do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    run "ln -nfs #{shared_path}/config/Procfile #{release_path}/Procfile"
    run "ln -nfs #{shared_path}/config/.foreman #{release_path}/.foreman"
  end
end

namespace :images do
  desc "Symlink shared public spree products folders on each release."
  task :symlink, except: {no_release: true} do
    run "rm -rf #{release_path}/public/spree"
    run "ln -nfs #{shared_path}/spree #{release_path}/public/spree"
  end
end
after "bundle:install", "images:symlink"

namespace :revisions do
  desc "Check that local and remote git repositories are in sync."
  task :check_sync, roles: :web do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes."
      exit
    end
  end
end

before 'deploy:assets:precompile', 'deploy:symlink_shared'

before 'deploy:start', 'foreman:export'
after 'deploy:start', 'foreman:start'

before 'deploy:restart', 'foreman:export'
after 'deploy:restart', 'foreman:restart'

after 'deploy', 'deploy:cleanup'