import React, { Component } from 'react';
import formatCurrency from '../lib/formatCurrency';
import getAmountInUSD from '../lib/getAmountInUSD';

import CategorySelect from './CategorySelect';
import CurrencySelect from './CurrencySelect';

export default class ExpenseItem extends Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.props.onUpdateExpense(this.props.expense.id, { [name]: value });
  }

  handleRemove = () => {
    this.props.onRemoveExpense(this.props.expense.id);
  }

  render() {
    const { expense, currencies, categories } = this.props;

    return (
      <tr>
        <td>{expense.id}</td>
        <td style={{ textAlign: 'left' }}>{expense.title}</td>
        <td>{expense.amount}</td>
        <td>
          <CurrencySelect currencies={currencies} value={expense.currency} onChange={this.handleChange} />
        </td>
        <td>
          <CategorySelect categories={categories} value={expense.category} onChange={this.handleChange} />
        </td>
        <td>{formatCurrency(getAmountInUSD(expense, currencies))}</td>
        <td>
          <button onClick={this.handleRemove}>
            &times;
          </button>
        </td>
      </tr>
    );
  }
}
