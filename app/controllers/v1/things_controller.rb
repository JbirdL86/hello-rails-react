module V1
  class ThingsController < ApplicationController
    def index
      @greetings = Greeting.all

      render json: { greetings: Greeting.all }.to_json
    end
  end
end
