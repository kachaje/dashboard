class EventController < ApplicationController

  def index
  end

  def create
    if params

      u = User.authenticate(params[:name].gsub(/\s/,"_").downcase, params[:password])

      # raise params.to_yaml
      
      if u.nil?
        user = User.new(:password => params[:password], :name => params[:name],
          :username => params[:name].gsub(/\s/,"_").downcase)
      
        user.save

        event = Event.new(:user_id => user.user_id,
          :event_date => params[:event_date],
          :event_description => params[:description])
        event.save
                        
      else
        
        user = User.find_by_username(params[:name].gsub(/\s/,"_").downcase) rescue nil

        if user
          
          event = Event.new(:user_id => user.user_id,
            :event_date => params[:event_date],
            :event_description => params[:description])
          event.save

        end
      end
    end
    
    redirect_to :controller => "home", :action => "index", :layout => "application" and return
    
  end
end
