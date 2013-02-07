class HomeController < ApplicationController
  def index
    @site = Site.first
    @footercontent = "index"
  end
   
  def about
    @site = Site.first
    @footercontent = "about"
    
    
  end
  
  def contact
    @site = Site.first
    @footercontent = "contact"
  end
  
  def services
    @site = Site.first
    @footercontent = "services"
  end 
  
end


