# frozen_string_literal: true

module Types
  class AccountType < Types::BaseObject
    graphql_name 'AccountType'
    field :id, ID, null: false
    field :balance, Int
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :transactions, [Types::TransactionType], null: true
  end
end
