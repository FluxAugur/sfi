Deface::Override.new(:virtual_path  => "spree/users/show",
                     :replace => "div#new_address_link",
                     :text          => "<div id='new_address_link'>
                                <br /> <a href='/addresses/new'><button>Add new shipping address</button></a>
                                        </div>",
                     :name          => "address_link_button")