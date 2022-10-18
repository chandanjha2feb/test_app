FactoryBot.define do
    factory :transaction do
      account
      credit_account_id { account }
      debit_account_id { account }
      amount { 1000 }
    end
  end