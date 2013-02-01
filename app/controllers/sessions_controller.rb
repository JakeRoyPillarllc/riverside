class SessionsController < ApplicationController
  def create
    session[:username] = params[:username]
    session[:password] = params[:password]
    flash[:notice] = "Successfully logged in"
    redirect_to "/"
  end

  def destroy
    reset_session
    flash[:notice] = "Successfully logged out"
    redirect_to login_path
  end
end