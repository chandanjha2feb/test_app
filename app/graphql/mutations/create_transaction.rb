module Mutations
  class CreateTransaction < BaseMutation
    graphql_name "CreateTransaction"

    field :transaction, Types::TransactionType, null: false

    # define arguments required to create a transaction
    argument :debitAccountId, Integer, required: true
    argument :creditAccountId, Integer, required: true
    argument :accountId, Integer, required: true
    argument :amount, Integer, required: true

    def resolve(creditAccountId:, debitAccountId:, accountId:, amount:)
      account = Account.find(accountId);
      debit_account = Account.find(debitAccountId);
      credit_account = Account.find(creditAccountId);
      begin
        if account && debit_account && credit_account  && amount > 0 && account.balance > 0 
          debit_account_balance = account.balance - amount
          credit_account_balance = credit_account.balance + amount
          if account.update(balance: debit_account_balance) && credit_account.update(balance: credit_account_balance)
            transaction = account.transactions.create(
              amount: amount,
              debit_account_id: debitAccountId,
              credit_account_id: creditAccountId,
            )
            {transaction: transaction}
          end
        end
      rescue ActiveRecord::RecordInvalid => invalid
        GraphQL::ExecutionError.new(
          "Invalid Attributes for #{invalid.record.class.name}:
          #{invalid.record.errors.full_messages.join(', ')}"
        )
      end
    end
  end
end
