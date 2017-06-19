class Question < ApplicationRecord
  has_many :answers
  has_many :user_answers
  
  # fetches the answers with the question, easier than doing separate fetch request
  def as_json(*args)
    super(*args).merge(answers: answers.map(&:content))
  end
end
