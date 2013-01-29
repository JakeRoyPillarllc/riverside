class Project < ActiveRecord::Base
  attr_accessible :architect, :completed, :info, :name, :publications
  
  validates :name, :info, :presence => true
end
