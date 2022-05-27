import React, {createContext, useReducer} from "react"
import AppReducer from './AppReducer'

const initialState = 
{
    /* default transactions */
   transactions:  
   [
       { id: 1, text: 'Aluguel', amount: -450},
       { id: 2, text: 'Agua', amount: -3.50},
       { id: 3, text: 'Brigadeiro', amount: -10},
       { id: 4, text: 'Renda', amount: +150}
   ]
}

export const GlobalContext = createContext(initialState);

export const GLobalProvider = ({children}) => 
{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    /* deleting by the param ID */
    function deleteTransaction (id)
    {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    /* adding a new transaction by transaction data */
    function addTransaction (transaction)
    {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value = 
        {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>

    );
}