source 'https://rubygems.org'

gem 'rails', '3.2.14'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :development do
  gem 'capistrano'
  gem 'rvm-capistrano'
  gem 'better_errors'
  gem 'awesome_print'
  gem 'binding_of_caller'
  gem 'sqlite3'
end

group :production do
  gem 'mysql2'
  gem 'unicorn'
end

# To use jQuery (disabling jQuery 1.9.1 due to issues with Taxonomies)
gem 'jquery-rails', '~> 2.2.0'

gem 'spree', '~> 1.3.3'
gem 'spree_auth_devise', '~> 1.3.1'