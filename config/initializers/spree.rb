# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'

Spree::AppConfiguration.class_eval do
  preference :facebook_app_id, :string
end

Spree.config do |config|
  # Example:
  # Uncomment to override the default site name.
  config.site_name = 'Sanitary Fabricators Incorporated'
  config.facebook_app_id = "322607251209215"
end