class Project < ActiveRecord::Base
  
  has_many :project_photos, :dependent => :destroy
  
  attr_accessible :architect, :completed, :info, :name, :publications, :project_photos, :project_photos_attributes
  validates :name, :info, :presence => true
  
  accepts_nested_attributes_for :project_photos,  :reject_if => lambda { |pp| pp['photo'].nil? }, :allow_destroy => true
  
  
end
