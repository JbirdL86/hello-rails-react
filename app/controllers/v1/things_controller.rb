class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '3030'
      },
      {
        :name => 'some-other-thing',
        :guid => '3031'
      }
    ] }.to_json
  end
end
