class AddAttachmentServicesPhotoToSites < ActiveRecord::Migration
  def self.up
    change_table :sites do |t|
      t.attachment :services_photo
    end
  end

  def self.down
    drop_attached_file :sites, :services_photo
  end
end
