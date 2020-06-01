import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState.js'
import {Transaction} from './Transaction.js';

export const TransactionsList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext); 

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line 
    }, [])

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction} />))}
      </ul>
        </div>
    )
}
