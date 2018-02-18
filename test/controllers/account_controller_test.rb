require 'test_helper'

class AccountControllerTest < ActionDispatch::IntegrationTest
  test "should get sign_in" do
    get account_sign_in_url
    assert_response :success
  end

end
