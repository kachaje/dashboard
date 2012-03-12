class PostController < ApplicationController

  def reading

    # raise request.remote_ip.inspect
    # raise request.env['REMOTE_ADDR'].inspect

    site = Site.find(params[:site])

    if site
      var = params[:var]

      params.each do |key, value|
        fld = /#{var}(\d+)/.match(key)
        if fld

          reading = Reading.new(:site_id => site.site_id, 
                                :reading_variable => var,
                                :reading_value => value,
                                :reading_position => fld[1],
                                :client_ip => request.remote_ip
                               )
          reading.save

        end
      end
    end

    render :text => "1"
  end

end