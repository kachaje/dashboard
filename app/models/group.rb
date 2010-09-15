class Group < ActiveRecord::Base
  set_table_name "group"
  set_primary_key "group_id"

  belongs_to :site
  has_many :readings, :foreign_key => :group_id

end