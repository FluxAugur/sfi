# This is the primary location for defining spree preferences
#
# The expectation is that this is created once and stored in
# the spree environment
#
# setters:
# a.color = :blue
# a[:color] = :blue
# a.set :color = :blue
# a.preferred_color = :blue
#
# getters:
# a.color
# a[:color]
# a.get :color
# a.preferred_color
#
require "spree/core/search/base"

module Spree
  class AppConfiguration < Preferences::Configuration

    # Alphabetized to more easily lookup particular preferences
    preference :address_requires_state, :boolean, :default => true # should state/state_name be required
    preference :admin_interface_logo, :string, :default => 'sfi/logoSFI.png'
    preference :admin_products_per_page, :integer, :default => 50
    preference :allow_backorder_shipping, :boolean, :default => false # should only be true if you don't need to track inventory
    preference :allow_backorders, :boolean, :default => true
    preference :allow_checkout_on_gateway_error, :boolean, :default => false
    preference :allow_guest_checkout, :boolean, :default => false
    preference :allow_ssl_in_development_and_test, :boolean, :default => false
    preference :allow_ssl_in_production, :boolean, :default => true
    preference :allow_ssl_in_staging, :boolean, :default => true
    preference :alternative_billing_phone, :boolean, :default => false # Request extra phone for bill addr
    preference :alternative_shipping_phone, :boolean, :default => false # Request extra phone for ship addr
    preference :always_put_site_name_in_title, :boolean, :default => true
    preference :auto_capture, :boolean, :default => false # automatically capture the credit card (as opposed to just authorize and capture later)
    preference :cache_static_content, :boolean, :default => false
    preference :check_for_spree_alerts, :boolean, :default => true
    preference :checkout_zone, :string, :default => nil # replace with the name of a zone if you would like to limit the countries
    preference :company, :boolean, :default => true # Request company field for billing and shipping addr
    preference :create_inventory_units, :boolean, :default => true # should only be false when track_inventory_levels is false, also disables RMA's
    preference :currency, :string, :default => "USD"
    preference :currency_decimal_mark, :string, :default => "."
    preference :currency_symbol_position, :string, :default => "before"
    preference :currency_thousands_separator, :string, :default => ","
    preference :display_currency, :boolean, :default => true
    preference :default_country_id, :integer, :default => 49
    preference :default_meta_description, :string, :default => 'Sanitary Fabricators Incorporated'
    preference :default_meta_keywords, :string, :default => 'sanitary fabricators incorporated, sfi'
    preference :default_seo_title, :string, :default => 'Sanitary Fabricators Incorporated'
    preference :dismissed_spree_alerts, :string, :default => ''
    preference :emails_sent_from, :string, :default => 'sales@sanitaryfabricators.com'
    preference :hide_cents, :boolean, :default => false
    preference :last_check_for_spree_alerts, :string, :default => nil
    preference :layout, :string, :default => 'spree/layouts/spree_application'
    preference :logo, :string, :default => 'sfi/logoSFI.png'
    preference :max_level_in_taxons_menu, :integer, :default => 3 # maximum nesting level in taxons menu
    preference :max_quantity, :integer, :default => 1000 # Maximum allowable quantity when checking out
    preference :override_actionmailer_config, :boolean, :default => true
    preference :orders_per_page, :integer, :default => 15
    preference :prices_inc_tax, :boolean, :default => false
    preference :products_per_page, :integer, :default => 12
    preference :require_master_price, :boolean, :default => true
    preference :shipment_inc_vat, :boolean, :default => false
    preference :shipping_instructions, :boolean, :default => false # Request instructions/info for shipping
    preference :show_descendents, :boolean, :default => true
    preference :show_only_complete_orders_by_default, :boolean, :default => true
    preference :show_raw_product_description, :boolean, :default => false
    preference :show_zero_stock_products, :boolean, :default => false
    preference :show_variant_full_price, :boolean, :default => false #Displays variant full price or difference with product price. Default false to be compatible with older behavior
    preference :show_products_without_price, :boolean, :default => false
    preference :site_name, :string, :default => 'Sanitary Fabricators Incorporated'
    preference :site_url, :string, :default => 'www.sanitaryfabricators.com'
    preference :tax_using_ship_address, :boolean, :default => true
    preference :track_inventory_levels, :boolean, :default => true # will not track on_hand values for variants /products

    # Preferences related to image settings
    preference :attachment_default_url, :string, :default => '/spree/products/:id/:style/:basename.:extension'
    preference :attachment_path, :string, :default => ':rails_root/public/spree/products/:id/:style/:basename.:extension'
    preference :attachment_url, :string, :default => '/spree/products/:id/:style/:basename.:extension'
    preference :attachment_styles, :string, :default => "{\"mini\":\"48x48>\",\"small\":\"100x100>\",\"product\":\"240x240>\",\"large\":\"600x600>\"}"
    preference :attachment_default_style, :string, :default => 'product'
    preference :s3_access_key, :string
    preference :s3_bucket, :string
    preference :s3_secret, :string
    preference :s3_headers, :string, :default => "{\"Cache-Control\":\"max-age=31557600\"}"
    preference :use_s3, :boolean, :default => false # Use S3 for images rather than the file system
    preference :s3_protocol, :string
    preference :s3_host_alias, :string

    # searcher_class allows spree extension writers to provide their own Search class
    def searcher_class
      @searcher_class ||= Spree::Core::Search::Base
    end

    def searcher_class=(sclass)
      @searcher_class = sclass
    end
  end
end
