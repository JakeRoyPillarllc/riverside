class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :admin?

   protected 

    def admin?
      session[:username] == "admin" && session[:password] == "riverside"
    end

    def authorize
      unless admin?
        flash[:notice] = "unauthorized access"
        redirect_to "/"
        false
      end
    end

  
end
