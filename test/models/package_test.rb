require 'test_helper'

class PackageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @package = Package.create(tracking: "1Z967FF40295551399", carrier: "UPS", status: "Test Name")
  end

  test "package must be vaild" do
    assert @package.valid?
  end

  test "name must be present" do
    @package.status = ""
    assert_not @package.valid?
  end

  test "tracking number must be present" do
    @package.tracking = ""
    assert_not @package.valid?
  end

  test "carrier must be UPS, FedEx, or USPS" do
    valid_carriers = [:UPS, :FedEx, :USPS]
    valid_carriers.each do |is|
      begin
        @package.carrier = is
        assert true
      rescue
        assert false, "#{is} should be invalid"
      end
    end
  end
end
