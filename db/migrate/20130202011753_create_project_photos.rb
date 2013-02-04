class CreateProjectPhotos < ActiveRecord::Migration
  def change
    create_table :project_photos do |t|
      t.string :caption
      t.integer :project_id

      t.timestamps
    end
  end
end
