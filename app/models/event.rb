class Event < ActiveRecord::Base
  set_table_name "event"
  set_primary_key "event_id"

  belongs_to :user

  def self.events(period)
    data = {}
    
    Event.find(:all, :conditions => ["DATE_FORMAT(event_date, '%Y-%m') = ? AND COALESCE(voided, 0) = 0", period]).collect do |e|
      name = User.find(e.user_id).name rescue ""
      
      if data[e.event_date.strftime("%d")].nil?
        data["#{e.event_date.strftime("%d")}"] = [[name, e.event_description, e.event_id]]
      else
        data["#{e.event_date.strftime("%d")}"] << [name, e.event_description, e.event_id]
      end
    end rescue {}

    data
  end
  
end