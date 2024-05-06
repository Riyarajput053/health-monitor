import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Functions/Navbar';
const ViewMedExpense = () => {
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    fetchExpense();
  }, []);

  const fetchExpense = async () =>{
    //fetch api 
  }
  const handleViewExpense = (expenseId)=>{
    //show details of records 

  };
  return (
    <div>
       <Navbar authUser={true}/>
    <div className="container">
      <h1>View Medical Expenses</h1>
      <div className="expense-container">
        {expense.map(expense => (
          <div key={expense.id} className="expense-card">
            <h2>{expense.title}</h2>
            <p>{expense.description}</p>
            <button onClick={() => handleViewExpense(expense.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
      
    </div>
    
  )
}

export default ViewMedExpense
