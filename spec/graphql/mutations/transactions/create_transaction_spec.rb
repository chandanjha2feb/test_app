require 'rails_helper'

module Mutations
  module Books
    RSpec.describe CreateTransaction, type: :request do
      describe '.resolve' do
        it 'creates a transaction' do
          account1 = create(:account)
          account2 = create(:account)

          expect do
            post '/graphql', params: { 
                query: query(account_id: account.id, credit_account_id: account1.id, debit_account_id: account2.id, amount: 1000) 
            }
          end.to change { Transaction.count }.by(1)
        end
      end

      def query(account_id:)
        <<~GQL
          mutation {
            createBook(
              account_id: #{account_id} 
              amount: 1000
              creditAccountId: account1.id
              debitAccountId: account2.id
            ) {
              id
              balance
              transactions {
                amount
                creditAccountId
                debitAccountId
              }
            }
          }
        GQL
      end
    end
  end
end