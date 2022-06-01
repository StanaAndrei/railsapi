require "test_helper"

class RecordControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get record_add_url
    assert_response :success
  end

  test "should get complete" do
    get record_complete_url
    assert_response :success
  end
end
