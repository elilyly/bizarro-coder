class Api::V1::AuthController < ApplicationController


  def create
    @user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      render json: @user
    else
      render json: {error: 'No account or password found!'}
    end
  end
end


  # private
  # def login_params
  #   params.require(:user).permit(:id, :username, :password_digest)
  # end
