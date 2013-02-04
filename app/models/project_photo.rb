class ProjectPhoto < ActiveRecord::Base
  attr_accessible :caption, :project_id, :photo
  belongs_to :project
  has_attached_file :photo, :styles => { :thumb => "270x170" }
  #validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  
end
