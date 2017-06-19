class Api::V1::QuestionsController < ApplicationController
  def index
    @questions = Question.where(quiz_id: params[:quiz_id]).includes(:answers)
    render json: { questions: @questions }
  end
end
