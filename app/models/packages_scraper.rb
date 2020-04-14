require 'Kimurai'
class PackagesScraper < Kimurai::Base
    require 'nokogiri'
    require 'rest-client'
    require 'byebug'

    def self.process(url)
        unparsed_page = RestClient.get(url)
        parsed_page = Nokogiri::HTML(unparsed_page)

        p status = parsed_page.css('app_root').text
    end
end