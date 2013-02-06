class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.text :about
      t.text :services
      t.string :address1
      t.string :address2
      t.string :telephone
      t.string :fax
      t.string :email
      t.string :map_url

      t.timestamps
    end
  end
end
