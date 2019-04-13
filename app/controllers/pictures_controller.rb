class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def new
  end

  def create
    Picture.create(title: picture_params[:title], image: picture_params[:image], detail: picture_params[:detail], user_id: current_user.id)
  end

  private
  def picture_params
    params.require(:picture).permit(:title, :image, :detail)
  end
end
