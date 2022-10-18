module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :all_accounts, [AccountType], null: true,  description: 'Get all accounts id and name'
    #field :transactions, resolver: Queries::Transactions
    # field :user, resolver: Queries::User
    # field :post, resolver: Queries::Post
    field :account, AccountType, null: true do
      description "Get account balance"
      argument :id, ID, required: true
    end

    def account(id:)
      Account.find_by(id: id)
    end

    def all_accounts
      Account.all
    end
  end
end
