module Spree
  class PrintInvoiceConfiguration < Preferences::Configuration
    #preference :logo, :string, :default => Spree::Config[:logo]
    Spree::PrintInvoice::Config.set(logo_path: 'sfi/logoSFI.png')
    preference :suppress_anonymous_address => true
    preference :print_buttons => "invoice, packing_slip"
  end
end
