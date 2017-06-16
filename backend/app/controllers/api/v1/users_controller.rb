class Api::V1::UsersController < ApplicationController

  def index
    token = request.headers['Authorization']
    if token.present?
      decoded = JWT.decode(token, ENV['JWT_SECRET'], true, {algorithm: "HS256"})
      user = User.find_by(id: decoded.first['user_id'])
      if !user.present?
        render json: {error: 'Token invalid'}
      end
    else
      render json: {error: 'No Authorization Present'} and return
    end
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
