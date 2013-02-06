class AddAttachmentContactPhotoToSites < ActiveRecord::Migration
  def self.up
    change_table :sites do |t|
      t.attachment :contact_photo
    end
  end

  def self.down
    drop_attached_file :sites, :contact_photo
  end
end
