class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request, except: [:create]

  def me
    render json: { user: @user }
  end

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      token = JWT.encode({ user_id: user.id }, ENV['JWT_SECRET'], 'HS256')
      render json: { user: user, token: token }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def authenticate_request
    token = request.headers['Authorization']
    if token.present?
      decoded = JWT.decode(token, ENV['JWT_SECRET'], true, {algorithm: "HS256"})
      @user = User.find_by(id: decoded.first['user_id'])
      render json: { error: 'Token invalid' } and return unless @user.present?
    else
      render json: { error: 'No Authorization Present' } and return
    end
  end

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :password)
  end
end
