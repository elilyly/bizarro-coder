class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true
  has_many :quizzes
  has_many :questions, through: :quizzes
  has_many :user_answers
end
