# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'

Spree.config do |config|
  # Example:
  # Uncomment to override the default site name.
  config.site_name = 'Sanitary Fabricators Incorporated'
end

# Uncomment a single line to change the OAuth default url from /user/auth/:provider to the url indicated
# Spree::SocialConfig[:path_prefix] = 'member' # for /member/auth/:provider
# Spree::SocialConfig[:path_prefix] = 'profile' # for /profile/auth/:provider
Spree::SocialConfig[:path_prefix] = '' # for /auth/:provider