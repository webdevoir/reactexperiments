class ApplicationController < ActionController::Base

  attr_accessor :server_side_title

  before_action :_capture_controller
  after_action :_no_cache_for_json
  around_action :_tzinfo

  protected

  def _tzinfo(&block)
    session[:tzinfo] ||= Time.zone.name
    Time.use_zone(::Time.find_zone(session[:tzinfo]), &block)
  end

  def _capture_controller
    @controller = self
  end

  def _no_cache_for_json
    response.set_header('Cache-Control', 'no-store') if(response.content_type == 'application/json')
  end

end
