class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :password_digest)
  end
end
