class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :ruby
      t.string :javascript

      t.timestamps
    end
  end
end
