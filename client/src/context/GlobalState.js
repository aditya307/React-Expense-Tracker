import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import axios from 'axios';

// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
  user: null,
  token: null,
  login: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [State, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions', {
        headers: {
          Authorization: `bearer ${State.token}`,
        },
      });
      console.log('Loading..');
      console.log(res.status_code);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`, {
        headers: {
          Authorization: `bearer ${State.token}`,
        },
      });
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    // const config = {
    //     headers: {
    //         'Context-Type': 'application/json'
    //     }
    // }
    try {
      const res = await axios.post('/api/v1/transactions', transaction, {
        headers: {
          Authorization: `bearer ${State.token}`,
          'Context-type': 'application/json',
        },
      });

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }
  function setToken(token) {
    State.token = token;
  }
  function setUser(user) {
    State.user = user;
  }
  function setLogin(login) {
    State.login = login;
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: State.transactions,
        error: State.error,
        loading: State.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        token: State.token,
        user: State.user,
        login: State.login,
        setLogin,
        setToken,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
