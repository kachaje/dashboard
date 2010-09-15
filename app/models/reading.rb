class Reading < ActiveRecord::Base
  set_table_name "reading"
  set_primary_key "reading_id"

  belongs_to :group

  def self.sites
    @sites = {}
    @districts = District.find(:all)

    @districts.map do |d|
      @sites[d.name.downcase] = {}
      Site.find(:all, :conditions => ["district_id = ?", d.district_id]).map do |s|
        @sites[d.name.downcase][s.name.downcase] = {"color" => "blue"}
        @sites[d.name.downcase][s.name.downcase]["groups"] = self.groups(s.site_id)
        @sites[d.name.downcase][s.name.downcase]["station"] = {}

        aggregate_reading = 0
        single_red = 11.5
        single_yellow = 12.0
        single_blue = 0.0
        single_green = 12.1
        
        @sites[d.name.downcase][s.name.downcase]["groups"].map do |g|
          @sites[d.name.downcase][s.name.downcase]["station"][g] = {"label" => "Battery Voltage", "data" => []}
          pos = 20
          Reading.find_by_sql("SELECT * FROM reading r WHERE reading_position = #{g} \
                                AND reading_variable = 'voltage' ORDER BY reading_id DESC LIMIT 0,20 ").map do |r|

            if pos == 20
              aggregate_reading += r.reading_value.to_d
            end
            
            @sites[d.name.downcase][s.name.downcase]["station"][g]["data"] << [pos, "#{r.reading_value}"]
            pos -= 1
            
          end
        end

        if @sites[d.name.downcase][s.name.downcase]["groups"].length > 0
          if (aggregate_reading / @sites[d.name.downcase][s.name.downcase]["groups"].length) >= single_green
            @sites[d.name.downcase][s.name.downcase]["color"] = "green"
          elsif (aggregate_reading / @sites[d.name.downcase][s.name.downcase]["groups"].length) > single_red
            @sites[d.name.downcase][s.name.downcase]["color"] = "yellow"
          elsif (aggregate_reading / @sites[d.name.downcase][s.name.downcase]["groups"].length) > single_blue
            @sites[d.name.downcase][s.name.downcase]["color"] = "red"
          end
        end
        
      end
    end

    # raise @sites.to_yaml
    
    @sites
  end

  def self.groups(site_id)
    
    self.find_by_sql("SELECT DISTINCT(reading_position) reading_position FROM reading WHERE site_id = #{site_id}").collect{|g|
      g.reading_position
    } rescue []

  end

  def self.graph(district, site)
    data = [{"label" => "Battery Voltage", "data" => []}]
    district_id = District.find_by_name(district).district_id rescue nil

    if district_id
      site_id = Site.find_by_name(site).site_id rescue nil

      if site_id
        
        groups = self.groups(site_id)

        last_read = Reading.find_by_sql("SELECT MAX(reading_datetime) reading_datetime" + 
            " FROM reading WHERE site_id = " + site_id.to_s + " GROUP BY site_id").first.reading_datetime.strftime("%d/%m/%y %H:%M") rescue nil

        data[0]["label"] = (!last_read.nil? ? "As of: #{last_read}" : "Total Battery Voltage 1")

        groups.map do |g|
          pos = 0
          cot = 20

          data << {"label" => "Battery #{g}", "data" => []}

          Reading.find_by_sql("SELECT * FROM reading r WHERE reading_position = #{g} \
                                AND reading_variable = 'voltage' ORDER BY reading_id DESC LIMIT 0,20 ").map do |r|
            if data[0]["data"][pos]
              # data[0]["data"][pos][1] += r.reading_value.to_d
            else
              # data[0]["data"] << [cot, r.reading_value.to_d]
            end

            if g.to_i > 0
              data[g.to_i]["data"] << [cot, r.reading_value.to_d]
            end

            pos += 1
            cot -= 1
            
          end
        end

      end
    end
    data[0]["data"] = data[0]["data"].reverse
    
    data
  end
  
end