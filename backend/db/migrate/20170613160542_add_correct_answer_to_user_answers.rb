class AddCorrectAnswerToUserAnswers < ActiveRecord::Migration[5.1]
  def change
    add_column :user_answers, :correct_answer, :boolean
  end
end
