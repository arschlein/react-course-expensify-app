import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense list</h1>
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })}
        </div>
    );
};
//{...expense} umožní přebrat všechny props, co jsou v ExpenseListItem


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
