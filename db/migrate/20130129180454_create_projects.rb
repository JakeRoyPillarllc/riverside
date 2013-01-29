class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :info
      t.string :completed
      t.string :publications
      t.string :architect

      t.timestamps
    end
  end
end
