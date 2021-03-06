require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Reactexperiments
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.time_zone = 'Pacific Time (US & Canada)'

    config.generators do |g|
      g.test_framework  :rspec, :fixture => false
      g.helper          false
      g.view_specs      false
      g.helper_specs    false
      g.stylesheets     false
      g.javascripts     false
    end
  end
end
