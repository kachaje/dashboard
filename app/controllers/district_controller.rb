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

    type = SiteType.find_by_name(params[:sitetype]).id rescue nil
    
    longitude = params[:longitude] rescue nil
    
    latitude = params[:latitude] rescue nil
    
    if site.nil?

      @site = Site.new(:name => params[:sitename], :district_id => district_id, 
        :longitude => longitude, :latitude => latitude, :site_type => type)
    
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
  
  def monitor
  end
  
  def state
    if params[:state]
      Site.find_by_name(params[:site], 
        :conditions => ["district_id = ?", District.find_by_name(params[:district]).id]).update_attribute(:status, params[:state])    
    end
    
    current_state = Site.find_by_name(params[:site], 
      :conditions => ["district_id = ?", District.find_by_name(params[:district]).id]).status rescue ""
    
    render :text => current_state
  end
  
  def query_district
    sites = Site.find(:all, :conditions => ["district_id = ?", 
        District.find_by_name(params[:district]).id]).collect{|site| 
      [site.name.gsub(/'/, ""), site.site_id, site.site_type, site.longitude, site.latitude, site.status, site.ip_address] 
    }
    
    results = {}
    
    sites.each do |site|
      status = "Down"
      status = Ping.pingecho(site[6], 5) if !site[6].nil?
      
      if status != "Down" && status == true
        status = "Up"
      elsif status == false
        status = "Down"
      else 
        status = "Offline"
      end
      
      system = (!site[5].nil? ? site[5].titleize : "Offline")
      
      battery = Reading.find(:all, :group => [:reading_position], 
        :select => ["MAX(reading_datetime) reading_datetime, reading_position, reading_value"], 
        :conditions => ["site_id = ? AND reading_datetime > SUBTIME(NOW(), '0 0:30:00')", site[1]]) rescue nil
      
      if battery.length > 0
        total = 0.0
        
        battery.each{|b|
          total += b.reading_value.to_f
        }
        
        battery = total / battery.length
      else
        battery = 0
      end
      
      finalstatus = ""
      batterystatus = ""
      
      if system.downcase == "down"
        finalstatus = "red"
        
        if battery == 0
          batterystatus = "Offline"
        elsif battery < 11
          batterystatus = "Not Charging"
        elsif battery > 11 && battery < 12
          batterystatus = "Discharging"
        elsif battery >= 12
          batterystatus = "Charging"
        else
          batterystatus = "Offline"
        end
        
      elsif status.downcase == "down"
        finalstatus = "#ccf"
        
        if battery == 0
          batterystatus = "Offline"
        elsif battery < 11
          batterystatus = "Not Charging"
        elsif battery > 11 && battery < 12
          batterystatus = "Discharging"
        elsif battery >= 12
          batterystatus = "Charging"
        else
          batterystatus = "Offline"
        end
         
      elsif battery == 0
        if system.downcase == "up" && status.downcase == "up"
          finalstatus = "#ccf"
        else
          finalstatus = "white"
        end        
        batterystatus = "Offline"
      elsif battery < 11
        finalstatus = "red"
        batterystatus = "Not Charging"
      elsif battery > 11 && battery < 12
        finalstatus = "#ffbf00"
        batterystatus = "Discharging"
      elsif battery >= 12
        finalstatus = "green"
        batterystatus = "Charging"
      else
        finalstatus = "white"
        batterystatus = "Offline"
      end
      
      # sitetype = "circle"
      
      type = SiteType.find(site[2]).name rescue ""
      
      case type.titleize
      when "Central Hospital"
        sitetype = "square"
      when "District Hospital"
        sitetype = "square"
      else
        sitetype = "circle"
      end
      
      results[site[0]] = [site[4], site[3], finalstatus, sitetype, status, system, batterystatus]
    end
    
    # raise results.to_json.to_json.to_yaml
    
    render :text => results.to_json
  end
  
end
