class HomeController < ApplicationController
  def index
    @sites = Reading.sites

    @events = Event.events(Date.today.strftime("%Y-%m"))

    render :layout => "application"
  end

  def events
    @events = Event.events(params[:period])

    render :text => @events.to_json
  end

  def remove_event
    if params[:element]
      event = Event.find(params[:element])

      event.update_attribute(:voided, 1)
    end
    @events = Event.events(params[:period])

    render :text => @events.to_json
  end
  
end
