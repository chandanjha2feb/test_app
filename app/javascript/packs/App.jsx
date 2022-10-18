import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/client";
import { createRoot } from 'react-dom/client';
import { client } from "./apollo"
import Transaction from './front-end-react/src/transactionComponent';
import TransactionList from './front-end-react/src/listTransactionsComponent';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div>
          <header>
            <h1>Transactions</h1>
          </header>
          <Transaction />
        </div>
        <Routes>
          <Route path="transaction-lists" element={<TransactionList />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}




document.addEventListener('DOMContentLoaded', () => {
  const div = document.body.appendChild(document.createElement('div'));
  div.id = 'app'
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<App tab="home" />);
  // ReactDOM.render(
  //   <App />,
  //   document.body.appendChild(document.createElement('div')),
  // )
})