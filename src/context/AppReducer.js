
export default (state, action) =>
{
    /* switching by the type of action requested */
    switch(action.type)
    {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        
        default:
            return state;
    }
}