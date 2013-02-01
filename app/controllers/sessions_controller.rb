class SessionsController < ApplicationController
  def create
    session[:username] = params[:username]
    session[:password] = params[:password]
    if session[:username] == "admin" && session[:password] == "riverside"
      flash[:notice] = "Successfully logged in."
      redirect_to "/" and return
    else
      flash[:error] = "Please check your credentials."
      redirect_to :back
    end
  end

  def destroy
    reset_session
    flash[:notice] = "Successfully logged out."
    redirect_to login_path
  end
end