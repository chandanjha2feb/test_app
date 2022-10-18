import React, { Component } from 'react';
import { useQuery } from '@apollo/client'
import { GET_TRANSACTIONS } from "../../apollo";

function AllTransactions(props)  {
    let { error, data } = useQuery(GET_TRANSACTIONS, {
      variables: { ID: parseInt(props.accountId) }
    });
    console.log("Data", data)
    if(data){
      return (
        <div className='transactions'>
          <table>
            <thead>
                <tr>
                    <td>MyAccount</td>
                    <td>Balance</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data['account'].name}</td>
                    <td>{data['account'].balance}</td>
                </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Account Id</th>
                <th>Transaction Id</th>
                <th>Transaction Amount</th>
                <th>Debit Account ID</th>
                <th>Credit Account ID</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data['account'].transactions.map((transaction) => {
                return (
                    <tr>
                        <td>{transaction.accountId}</td>
                        <td>{transaction.id}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.creditAccountId}</td>
                        <td>{transaction.debitAccountId}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
}
 
export default AllTransactions