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
  gem 'foreman'
end

# To use jQuery (disabling jQuery 1.9.1 due to issues with Taxonomies)
gem 'jquery-rails', '~> 2.2.0'

# To use official Spree Commerce related gems
gem 'spree', github: 'synaptian/spree', branch: '1-3-stable'
gem 'spree_auth_devise', github: 'spree/spree_auth_devise', branch: '1-3-stable'
gem 'spree_gateway', github: 'spree/spree_gateway', branch: '1-3-stable'
gem 'spree_static_content', github: 'spree/spree_static_content', branch: '1-3-stable'
gem 'spree_volume_pricing', github: 'spree/spree_volume_pricing', branch: '1-3-stable'
gem 'spree_active_shipping', github: 'spree/spree_active_shipping', branch: '1-3-stable'
gem 'spree_social', github: 'spree/spree_social', branch: '1-3-stable'

# To use unofficial (third-party) Spree Commerce related gems
gem 'spree_advanced_reporting', github: 'dotsi/spree_advanced_reporting', branch: '1-3-stable'
gem 'spree_contact_us', github: 'jdutil/spree_contact_us', branch: '1-3-stable'
# gem 'synergy_inventory_management', github: 'synaptian/synergy_inventory_management', branch: 'master'
gem 'spree_chimpy', github: 'iloveitaly/spree_chimpy', branch: 'master'
# gem 'import_products', github: 'conversionfoundry/spree-import-products', branch: '1_3_x'

# To use Twitter Bootstrap with Spree (requires spree ~> '2.0.0')
# gem 'spree_bootstrap', github: 'jdutil/spree_bootstrap', branch: 'master'