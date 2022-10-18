import React, { useState, useEffect } from 'react';
import { Mutation } from '@apollo/client/react/components';
import { CREATE_TRANSACTION } from "../../apollo";
import AllTransactions from './listTransactionsComponent';
import { useQuery } from '@apollo/client';
import ListAccount from './listAccountsComponent';
// import { NavLink } from 'react-router-dom';


export default function Transaction() {
  const [inputs, setInputs] = useState({
    debitAccountId: '',
    amount: '',
    creditAccountId: '',
    showTransactions: false,
    errors: []
  })

  const handleFormSubmit = ( props ) => {
    console.log("hAndleSubmit")
    let { createTransaction } = props;
    console.log("Data", inputs)
    createTransaction({
      variables:{
        accountId: parseInt(inputs.debitAccountId),
        amount: parseInt(inputs.amount),
        debitAccountId: parseInt(inputs.debitAccountId),
        creditAccountId: parseInt(inputs.creditAccountId)
      }
    })
    .then((response) =>{
      alert('Transaction created successfully')
      const { data } = response;
      setInputs((prevState) => ({
        ...prevState,
        ['showTransactions']: true,
      }))
      console.log("Inputs",inputs)
    })
    .catch((e) => {
      console.log(e)
      let messages = JSON.parse(e.graphQLErrors[0].message)
      setInputs((prevState) => ({
        ...prevState,
        ['errors']: messages.errors,
      }))
    })
  }

  const handleChange = (e) =>{
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  const showErrors = () =>{
    console.log("Show errors is called")
    let { errors } = inputs;
    const errorsList = errors.map((error, index)=>(
      <li key={index}>{error}</li>
    ))

    return (
      <ul>
        {errorsList}
      </ul>
    )
  }
  
  return (
    <>
      <Mutation
        mutation={CREATE_TRANSACTION}
      >
      {(createTransaction) =>(
        <div>
          <h2>Create Transaction Form</h2>
          {showErrors}
          <form onSubmit={e =>{
            e.preventDefault()
            handleFormSubmit({ createTransaction })
          }}>
            <div>
              <label>Choose Debit Account</label>
              <ListAccount handleChange={handleChange} type={"creditAccountId"}/>
            </div>

            <div>
              <label>Choose Credit Account</label>
              <ListAccount handleChange={handleChange} type={"debitAccountId"}/>
            </div>

            <div>
              <label>Amount</label>
              <input type="number" id="amount" name="amount" onChange={handleChange} required/>
            </div>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      </Mutation>
      {inputs.showTransactions && <AllTransactions accountId={inputs.debitAccountId} />}
      {/* <NavLink to="transaction-lists">Transaction List</NavLink> */}
    </>
  );
}
 
// export default Transaction;