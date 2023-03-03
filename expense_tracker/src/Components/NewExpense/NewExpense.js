import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); // This is the function that was passed from App.js
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;