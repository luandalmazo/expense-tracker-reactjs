import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => 
{
    const { transactions } = useContext(GlobalContext);
    /* return all transactions by iterating all transactions */
    return (
        <div>
            <h3>Histórico</h3>
            <ul className = "list">
                {transactions.map(transaction => ( <Transaction key = {transaction.id} transaction = {transaction} /> ))}
            </ul>
        </div>
    );
}