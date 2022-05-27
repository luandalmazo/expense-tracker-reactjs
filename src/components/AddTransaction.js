import React, {useState, useContext} from "react"
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () =>
{
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => 
    {
        e.preventDefault();
        const newTransaction = 
        {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        
        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Adicionar uma transação</h3>
            <form onSubmit={onSubmit}>
                <div className = "form-control">
                    <label for = "text">Descrição</label>
                    <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} 
                    placeholder="Digite a descrição"/> 
                </div>
                <div className = "form-control">
                    <label for = "amount"> Quantia <br/> 
                    (negativo - despesa, positivo - renda)
                    </label>
                    <input type = "number"  value = {amount} onChange = {(e) => setAmount(e.target.value)}
                    placeholder="Digite a quantia"/>
                </div>
                <button className = "btn"> Adicionar transação </button>
            </form>
        </div>
    );
}