class UsersController < ApplicationController
  def show
    @users = Picture.where(user_id: params[:id])
  end
end
