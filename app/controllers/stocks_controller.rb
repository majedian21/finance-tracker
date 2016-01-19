class StocksController < ApplicationController
  def search
    if params[:stock]
      # Search local database first
      @stock = Stock.find_by_ticker(params[:stock])
      # if no local record, so lookup from API
      @stock ||= Stock.new_from_lookup(params[:stock])
    end

    if @stock
      #render json: @stock
      render partial: 'lookup'
    else
      render status: :not_found, nothing: true
    end
  end

end
