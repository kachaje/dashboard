#!/usr/bin/ruby -w
require "mysql"
require "net/http"
require "uri"

con = Mysql.connect('localhost', 'root', 'admin', 'dashboard')

rs = con.query("SELECT * FROM unit WHERE active = 1")

units = []

rs.each_hash {|h| 
  units << {
    "site" => h["name"],
    "ip" => h["start_ip"],
    "site_id" => h["site_id"]
  }
}

units.each {|u|
  uri = URI.parse("http://" + u["site"] + "/")

  # Shortcut
  response = Net::HTTP.get_response(uri) rescue nil

  if !response.nil?
	  # Will print response.body
	  Net::HTTP.get_print(uri)

	  # Full
	  http = Net::HTTP.new(uri.host, uri.port)
	  response = http.request(Net::HTTP::Get.new(uri.request_uri))

	  result = ""

	  site = u["site"]

	  if(response.code != "200")
	    uri = URI.parse("http://" + u["ip"] + "/")

	    # Shortcut
	    response = Net::HTTP.get_response(uri)

	    # Will print response.body
	    Net::HTTP.get_print(uri)

	    # Full
	    http = Net::HTTP.new(uri.host, uri.port)
	    response = http.request(Net::HTTP::Get.new(uri.request_uri))
	    
	    result = response.body

	    site = u["ip"]
	  else
	    result = response.body
	  end

	  results = result.scan(/battery\s(\d+)\sis\s(\d+\.\d+)/i)

    p site
    
	  results.each{|r|
	    
	    rs = con.query("INSERT INTO reading (site_id, reading_variable, reading_value, \
			                    reading_position, reading_datetime, client_ip) \
			    VALUES(#{u["site_id"]}, 'voltage', #{r[1]}, #{r[0]}, NOW(), '#{site}')")
	
    } 
    
  end
}

con.close
