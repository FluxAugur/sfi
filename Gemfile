source 'https://rubygems.org'

gem 'rails', '3.2.14'
gem 'bundler'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :development do
  gem 'capistrano'
  gem 'rvm-capistrano'
  gem 'better_errors'
  #gem 'jazz_hands'
  gem 'awesome_print'
  gem 'binding_of_caller'
  gem 'sqlite3'
  gem 'thin'
  gem 'rails-footnotes', '>= 3.7.9'
  gem 'quiet_assets'
end

group :production, :staging do
  gem 'mysql2'
  gem 'unicorn'
  gem 'foreman'
  gem 'bluepill'
  gem 'awesome_print'
end

# To use jQuery (disabling jQuery 1.9.1 due to issues with Taxonomies)
gem 'jquery-rails', '~> 2.2.0'

# Use Figaro for configuration management
gem 'figaro', branch: 'master'

# To use Synaptian Spree Commerce gem
gem 'spree', github: 'synaptian/spree', branch: '1-3-stable'

# To use official Spree Commerce related gems
gem 'spree_auth_devise', github: 'spree/spree_auth_devise', branch: '1-3-stable'
gem 'spree_gateway', github: 'spree/spree_gateway', branch: '1-3-stable'
gem 'spree_static_content', github: 'spree/spree_static_content', branch: '1-3-stable'
gem 'spree_volume_pricing', github: 'spree/spree_volume_pricing', branch: '1-3-stable'
gem 'spree_active_shipping', github: 'spree/spree_active_shipping', branch: '1-3-stable'
gem 'spree_social', github: 'spree/spree_social', branch: '1-3-stable'
gem 'spree_print_invoice' , github: 'spree/spree_print_invoice', branch: 'master'
gem 'spree_address_book', github: 'Siesna/spree_address_book', branch: 'current_user-in-checkout-fix'

# To use unofficial (third-party) Spree Commerce related gems
gem 'spree_advanced_reporting', github: 'dotsi/spree_advanced_reporting', branch: '1-3-stable'
gem 'spree_contact_us', github: 'jdutil/spree_contact_us', branch: '1-3-stable'
gem "spree_social_products", github: "Siesna/spree_social_products", branch: '1-3-stable'

# gem 'synergy_inventory_management', github: 'synaptian/synergy_inventory_management', branch: 'master'
# gem 'spree_chimpy', github: 'iloveitaly/spree_chimpy', branch: 'master'
# gem 'import_products', github: 'conversionfoundry/spree-import-products', branch: '1_3_x'

# To use Twitter Bootstrap with Spree (requires spree ~> '2.0.0')
# gem 'spree_bootstrap', github: 'jdutil/spree_bootstrap', branch: 'master'
