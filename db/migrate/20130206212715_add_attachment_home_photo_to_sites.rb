class AddAttachmentHomePhotoToSites < ActiveRecord::Migration
  def self.up
    change_table :sites do |t|
      t.attachment :home_photo
    end
  end

  def self.down
    drop_attached_file :sites, :home_photo
  end
end
