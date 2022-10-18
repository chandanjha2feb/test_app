// app/javascript/packs/front-end-react/apollo.js
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
//import gql from "graphql-tag";



export const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
})


// let's define graphql queries here, similar to what we send using rails Graphiql Engine
console.log("I am here")
export const CREATE_TRANSACTION = gql `
  mutation CreateTransaction($debitAccountId: Int!, $creditAccountId: Int!, $amount: Int!, $accountId: Int!){
    createTransaction(
      input: {
        amount: $amount
        accountId: $accountId
        debitAccountId: $debitAccountId
        creditAccountId: $creditAccountId
      }
    ){
      transaction {
        id
        amount
      }
    }
  }
`

// get all transactions balance
export const GET_TRANSACTIONS = gql`
  query getTransactions($ID: ID!){
    account(id: $ID){
      id
      balance
      name
      transactions {
        id
        amount
        debitAccountId
        creditAccountId
        createdAt
      }
    }
  }
`
// get all accounts
export const GET_ACCOUNTS = gql`
  query getAccounts{
    allAccounts{
      id
      name
    }
  }
`