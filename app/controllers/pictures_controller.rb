class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def show
    @picture = Picture.find(params[:id])
  end

  def new
  end

  def create
    Picture.create(picture_params)
  end

  private
  def picture_params
    params.require(:picture).permit(:title, :image, :detail)
  end
end
