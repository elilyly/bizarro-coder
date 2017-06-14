class Api::V1::UserAnswersController < ApplicationController

  def index
    @user_answers = UserAnswer.all
    render json: @user_answers
  end

  def create
    @user_answer = UserAnswer.create(userAnswer_params)
    render json: @user_answer
  end

  private
  def userAnswer_params
    params.require(:user_answer).permit(:input)
  end
end
