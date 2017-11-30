import React, { Component } from 'react';

import formatCurrency from '../lib/formatCurrency';
import getAmountInUSD from '../lib/getAmountInUSD';

import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

export default class ExpenseList extends Component {
  get totalAmount() {
    const { expenses, currencies } = this.props;
    return expenses.reduce((total, expense) => {
      return total + getAmountInUSD(expense, currencies);
    }, 0);
  }

  render() {
    const {
      expenses,
      onRemoveExpense,
      currencies,
      categories,
      onUpdateExpense,
    } = this.props;

    return (
      <section className="ExpenseList">
        <h2>Expenses</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Category</th>
              <th>Amount in USD</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                currencies={currencies}
                categories={categories}
                onRemoveExpense={onRemoveExpense}
                onUpdateExpense={onUpdateExpense}
              />
            ))}
          </tbody>
        </table>
        <div className="ExpenseList--summary">
          <strong>Total Amount</strong>: {formatCurrency(this.totalAmount)}
        </div>
      </section>
    );
  }
}
