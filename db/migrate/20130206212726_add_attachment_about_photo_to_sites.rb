class AddAttachmentAboutPhotoToSites < ActiveRecord::Migration
  def self.up
    change_table :sites do |t|
      t.attachment :about_photo
    end
  end

  def self.down
    drop_attached_file :sites, :about_photo
  end
end
