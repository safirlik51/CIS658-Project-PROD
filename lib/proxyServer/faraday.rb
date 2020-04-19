require 'faraday'

post '/rest/Track' do
  response = do_request(data)
  set_access_control
  response.body
end

ALLOWED_REFERRERS = ['http://mydomain.com','http://localhost:3000']

def do_request(data)
  url = "https://onlinetools.ups.com/rest/Track"
  conn = Faraday.new(url)
  conn.post(url,data,"Content-Type" => "application/json")
end

def set_access_control
  request_referrer = request.env['HTTP_REFERER'] || request.env['REQUEST_URI']

  referrer = ALLOWED_REFERRERS.detect do |allowed_referrer|
    request_referrer =~ /#{allowed_referrer}/i
  end

  headers "Access-Control-Allow-Origin" => referrer
end
