class DistrictController < ApplicationController
  def index
    @sites = Reading.sites

    render :layout => "application"
  end

  # Create new site. Checks are first done to determine if the parserd value
  # already exist
  def create_site
   
    district_id = District.find_by_name(params[:district]).district_id rescue nil

    site = Site.find_by_name(params[:sitename], :conditions => ["district_id = ?", district_id]) rescue nil

    if site.nil?

      @site = Site.new(:name => params[:sitename], :district_id => district_id)
    
      @site.save

      flash[:notice] = "Site #{params[:sitename]} created"

    else
      flash[:error] = "Site #{params[:sitename]} in #{params[:district]} already exists! Choose a different site name."
    end

    redirect_to "/images/malawi/districts?district=#{params[:district]}",
      :layout => "application" and return
    
  end

  def graph
    @graph = Reading.graph(params[:district], params[:site]) rescue {}

    render :text => @graph.to_json
  end
  
end
