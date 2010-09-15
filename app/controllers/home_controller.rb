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
  
end
