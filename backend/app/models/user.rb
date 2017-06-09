class User < ApplicationRecord
  has_many :quizzes
  has_many :questions, through: :quizzes
  has_many :user_answers
end
