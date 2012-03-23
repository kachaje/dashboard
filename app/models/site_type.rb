class SiteType < ActiveRecord::Base
  set_table_name "site_type"
  set_primary_key "type_id"

  belongs_to :site
  
end