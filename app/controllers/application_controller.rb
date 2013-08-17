class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from ActionController::RoutingError, with: :route_not_found
  rescue_from ActionController::MethodNotAllowed, with: :invalid_method

  private

  def route_not_found
    redirect_to root_url, notice:  "The page you requested does not exist. Taking you home."
  end

  def invalid_method

    render text: message, status: :method_not_allowed
  end
end