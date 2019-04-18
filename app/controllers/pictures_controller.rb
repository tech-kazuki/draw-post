class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    @swiper_pictures = Picture.order('created_at DESC').limit(9)
  end

  def show
    @picture = Picture.find(params[:id])
  end

  def new
  end

  def create
    Picture.create(title: picture_params[:title], image: picture_params[:image], detail: picture_params[:detail], user_id: current_user.id)
  end

  def destroy
    Picture.delete(params[:id])
    redirect_to action: 'index'
  end

  private
  def picture_params
    params.require(:picture).permit(:title, :image, :detail)
  end
end
