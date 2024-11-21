import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(""); // Separate state for setting the budget
  const [expenseAmount, setExpenseAmount] = useState(""); // Separate state for expense amount

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = budget - totalExpenses;

  const handleSetBudget = (e) => {
    e.preventDefault();
    if (budgetAmount > 0) {
      setBudget(Number(budgetAmount));
      setBudgetAmount("");
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (title && expenseAmount > 0) {
      setExpenses([
        ...expenses,
        { id: Date.now(), title, amount: Number(expenseAmount) },
      ]);
      setTitle("");
      setExpenseAmount("");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="budget-tracker-container">
      <header className="app-header">
        <h1>💰 Budget Tracker</h1>
      </header>

      {/* Budget Section */}
      <section className="budget-section card">
        <h2>Set Your Budget</h2>
        <form onSubmit={handleSetBudget}>
          <input
            type="number"
            placeholder="Enter Total Budget"
            value={budgetAmount}
            onChange={(e) => setBudgetAmount(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="primary-button">
            Set Budget
          </button>
        </form>
      </section>

      {/* Expense Section */}
      <section className="expense-section card">
        <h2>Add an Expense</h2>
        <form onSubmit={handleAddExpense}>
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Expense Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="primary-button">
            Add Expense
          </button>
        </form>
      </section>

      {/* Summary Section */}
      <section className="summary-section">
        <div className="summary-card">
          <h3>Total Budget</h3>
          <p className="summary-value">${budget}</p>
        </div>
        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p className="summary-value">${totalExpenses}</p>
        </div>
        <div className="summary-card">
          <h3>Remaining Balance</h3>
          <p className="summary-value balance-value">${balance}</p>
        </div>
      </section>

      {/* Expense List Section */}
      <section className="expense-list card">
        <h2>Expense List</h2>
        {expenses.length > 0 ? (
          <ul className="expense-list-items">
            {expenses.map((expense) => (
              <li key={expense.id} className="expense-item">
                <span>{expense.title}</span>
                <span className="expense-amount">${expense.amount}</span>
                <button
                  onClick={() => handleDeleteExpense(expense.id)}
                  className="delete-button"
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses added yet.</p>
        )}
      </section>
    </div>
  );
};

export default App;
