import React, { Component } from 'react';
import { useQuery } from '@apollo/client'
import { GET_ACCOUNTS } from "../../apollo";


function lisAccount(props) {
    let { error, data } = useQuery(GET_ACCOUNTS)
    if(data){
      return (
        <div className='accountsList'>
          <select onChange={props.handleChange} name={props.type} default={"Select Account"}>
            <option>Select Account</option> 
            {data['allAccounts'].map((account) => <option key={account.id} value={account.id}>{account.name}</option>)}
          </select>
        </div>
      )
    }
}
 
export default lisAccount