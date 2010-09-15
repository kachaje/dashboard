class Site < ActiveRecord::Base
  set_table_name "site"
  set_primary_key "site_id"

  has_many :groups, :foreign_key => :site_id
  belongs_to :district
  
end