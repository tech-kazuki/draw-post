class UsersController < ApplicationController
  def show
    @users_pictures = Picture.where(user_id: params[:id])
  end
end
