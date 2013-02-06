class Site < ActiveRecord::Base
  attr_accessible :about, :address1, :address2, :email, :fax, :map_url, :services, :telephone, :home_photo, :about_photo, :services_photo, :contact_photo
  has_attached_file :home_photo
  has_attached_file :about_photo
  has_attached_file :services_photo
  has_attached_file :contact_photo
  validates :about, :address1, :email, :fax, :map_url, :services, :telephone, :home_photo, :about_photo, :services_photo, :contact_photo, presence: true
  
end
