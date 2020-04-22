class Package < ApplicationRecord
    validates :tracking, presence: true
    validates :status, presence: true
    enum carrier: [:UPS, :FedEx, :USPS]
end
