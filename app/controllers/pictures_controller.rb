class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
  end

  def create
  end

  private
end
