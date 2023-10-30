import Expenses from "./components/Expenses/Expenses";
import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMY_EXEPENSE = [];

const App = () => {
    const [expenses, setExpense] = useState(DUMY_EXEPENSE);
    fetch("http://localhost:1414/api/expenses")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setExpense(data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });

    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        setExpense(updatedExpenses);
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}
export default App;