class HomeController < ApplicationController
  def index
    @site = Site.first
  end
   
  def about
    @site = Site.first
  end
  
  def contact
    @site = Site.first
  end
  
  def services
    @site = Site.first
  end 
  
end
