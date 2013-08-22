module Spree
  class PrintInvoiceConfiguration < Preferences::Configuration
    preference :logo, :string, :default => Spree::Config[:logo]
    preference :print_buttons, :string, :default => "invoice,packaging_slip"
    preference :print_invoice_logo_path, :string, :default => 'sfi/pdf-logo.png'
  end
end
