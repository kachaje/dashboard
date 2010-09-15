class District < ActiveRecord::Base
  set_table_name "district"
  set_primary_key "district_id"

  has_many :sites, :foreign_key => :district_id
  belongs_to :region
  
end