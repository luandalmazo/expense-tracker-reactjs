import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => 
{
    const { transactions } = useContext (GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item), 0);

    return(
        <div>
            <h4>Balanceamento Atual</h4>
            <h1>R${total}</h1>
        </div>
    );
}