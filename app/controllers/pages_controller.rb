class PagesController < ApplicationController
    skip_before_action :verify_authenticity_token 
    skip_before_action :authenticate_user!, :only => "reply", :raise => false
    def home
    end
  end
  