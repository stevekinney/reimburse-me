import React, { Component } from 'react';

export default class ExpenseItem extends Component {
  render() {
    const { expense } = this.props;

    return (
      <tr>
        <td>{expense.id}</td>
        <td style={{ 'text-align': 'left' }}>{expense.title}</td>
        <td>{expense.amount}</td>
        <td>
          <select value={expense.currency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="COP">COP</option>
            <option value="GBP">GBP</option>
          </select>
        </td>
        <td>
          <select value={expense.category}>
            <option value="General">General</option>
            <option value="Meals">Meals</option>
            <option value="Hotel">Hotel</option>
            <option value="Internet">Internet</option>
          </select>
        </td>
        <td>{expense.amount}</td>
        <td>
          <button>
            &times;
          </button>
        </td>
      </tr>
    );
  }
}
