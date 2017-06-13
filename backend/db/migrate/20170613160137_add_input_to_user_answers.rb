class AddInputToUserAnswers < ActiveRecord::Migration[5.1]
  def change
    add_column :user_answers, :input, :string
  end
end
