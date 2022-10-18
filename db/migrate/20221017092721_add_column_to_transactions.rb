class AddColumnToTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :debit_account_id, :integer
    add_column :transactions, :credit_account_id, :integer
  end
end
