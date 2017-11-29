import React, { Component } from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

export default class ExpenseList extends Component {
  get totalAmount() {
    return this.props.expenses.reduce((total, { amount, currency }) => {
      return total + parseInt(amount, 10);
    }, 0);
  }

  render() {
    const { expenses } = this.props;

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
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </tbody>
        </table>
        <div className="ExpenseList--summary">
          <strong>Total Amount</strong>: { this.totalAmount }
        </div>
      </section>
    );
  }
}
