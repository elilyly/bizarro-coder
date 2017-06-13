class RemoveInputFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :input, :string
  end
end
