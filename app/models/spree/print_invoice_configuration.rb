module Spree
  class PrintInvoiceConfiguration < Preferences::Configuration
    preference :logo, :string, :default => Spree::Config[:logo]
    preference :suppress_anonymous_address => true
    preference :print_buttons => "invoice, packing_slip"
  end
end
