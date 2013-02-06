# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130206212751) do

  create_table "project_photos", :force => true do |t|
    t.string   "caption"
    t.integer  "project_id"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "projects", :force => true do |t|
    t.string   "name"
    t.text     "info"
    t.string   "completed"
    t.string   "publications"
    t.string   "architect"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "sites", :force => true do |t|
    t.text     "about"
    t.text     "services"
    t.string   "address1"
    t.string   "address2"
    t.string   "telephone"
    t.string   "fax"
    t.string   "email"
    t.string   "map_url"
    t.datetime "created_at",                  :null => false
    t.datetime "updated_at",                  :null => false
    t.string   "home_photo_file_name"
    t.string   "home_photo_content_type"
    t.integer  "home_photo_file_size"
    t.datetime "home_photo_updated_at"
    t.string   "about_photo_file_name"
    t.string   "about_photo_content_type"
    t.integer  "about_photo_file_size"
    t.datetime "about_photo_updated_at"
    t.string   "services_photo_file_name"
    t.string   "services_photo_content_type"
    t.integer  "services_photo_file_size"
    t.datetime "services_photo_updated_at"
    t.string   "contact_photo_file_name"
    t.string   "contact_photo_content_type"
    t.integer  "contact_photo_file_size"
    t.datetime "contact_photo_updated_at"
  end

end
