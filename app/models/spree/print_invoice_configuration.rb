module Spree
  class PrintInvoiceConfiguration < Preferences::Configuration
    preference :print_invoice_logo_path, :string, :default => 'sfi/logoSFI.png'
    preference :print_buttons, :string, :default => 'invoice, packing_slip'
  end
end
