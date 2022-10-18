class Transaction < ApplicationRecord
    belongs_to :account
    validates_presence_of :amount, :account_id, :debit_account_id, :credit_account_id
end
