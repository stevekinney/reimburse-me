import React, { Component } from 'react';

import './NewExpense.css';

const defaultState = {
  title: '',
  amount: '',
  currency: 'USD',
  category: 'General',
};

export default class NewExpense extends Component {
  state = defaultState;

  render() {
    const { title, amount, currency, category } = this.state;

    return (
      <form className="NewExpense">
        <div className="NewExpense--controls">
          <div>
            <label>Title</label>
            <input type="text" placeholder="Title" value={title} />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" placeholder="Amount" value={amount} />
          </div>
          <div>
            <label>Currency</label>
            <select value={currency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="COP">COP</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div>
            <label>Category</label>
            <select value={category}>
              <option value="General">General</option>
              <option value="Meals">Meals</option>
              <option value="Hotel">Hotel</option>
              <option value="Internet">Internet</option>
            </select>
          </div>
        </div>
        <input type="submit" />
      </form>
    );
  }
}
