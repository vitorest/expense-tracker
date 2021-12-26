import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {


  // we use state here so that
  // no matter how often this function might execute again
  //this state is stored, and survives.
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // VANILA WAY
  // document.getElementById('').addEventListener('click', (event) =>{})

  // so, event is an object with lots of props,
  //to reach the value prop, you need to drill into target,
  // and inside target tere is a value argument
  //witch you have to point at too,
  // this way, you have the value of the event being triggered!


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm
