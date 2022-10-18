class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.references :account, null: false
      t.integer :amount

      t.timestamps
    end
  end
end
