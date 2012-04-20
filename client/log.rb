#!/usr/bin/ruby
require "rubygems"
require "rest_client"

url = "http://192.168.15.253"

cutoff = 11.20 # V

filelimit = 100  # MB

lastfile = ((Dir.open("/var/www/dashboard/client/log/").collect.length - 2) > 0 ? 
    ((Dir.open("/var/www/dashboard/client/log/").collect.length - 2) - 1) : 
    (Dir.open("/var/www/dashboard/client/log/").collect.length - 2))

result = RestClient.get(url).scan(/Battery\s(\d+)\sis\s(\d+\.\d+)/) rescue []

if File::exists?("/var/www/dashboard/client/log/logger#{lastfile}.csv") == false
  File.open("/var/www/dashboard/client/log/logger#{lastfile}.csv", "w") do |file|
    file.puts "Time,Battery 1,Battery 2,Battery 3,Battery 4\n"
  end
elsif ((File.size("/var/www/dashboard/client/log/logger#{lastfile}.csv").to_f / 1024000) > filelimit) == true
  lastfile += 1
  File.open("/var/www/dashboard/client/log/logger#{lastfile}.csv", "w") do |file|
    file.puts "Time,Battery 1,Battery 2,Battery 3,Battery 4\n"
  end
end

File.open("/var/www/dashboard/client/log/logger#{lastfile}.csv", "a+") do |file|
  str = Time.now.strftime("%Y-%m-%d %H:%M:%S") + ","
    
  sum = 0.00
    
  (0..(result.length - 1)).each{|r|
    str += result[r][1] + (r < (result.length - 1) ? "," : "")
    sum += result[r][1].to_f
  }
  file.puts str
    
  avg = sum / result.length.to_f
    
  if avg <= cutoff
    system "shutdown -h now"
    break
  end
end
