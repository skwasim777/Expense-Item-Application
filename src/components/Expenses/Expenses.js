import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from "react";
const Expenses = (props) => {
    return (
        <Card className='exepenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />

                    )
                )
            }

        </Card>
    );
}
export default Expenses