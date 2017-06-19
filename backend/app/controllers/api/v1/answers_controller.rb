class Api::V1::AnswersController < ApplicationController
  def index
    @answers = Answer.find(quiz_id: params[:quiz_id])
    render json: @answers
  end
end
