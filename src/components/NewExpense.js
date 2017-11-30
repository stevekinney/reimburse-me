import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import CategorySelect from './CategorySelect';
import CurrencySelect from './CurrencySelect';

import './NewExpense.css';

const defaultState = {
  title: '',
  amount: '',
  currency: 'USD',
  category: 'General',
};

export default class NewExpense extends Component {
  state = defaultState;

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, amount, currency, category } = this.state;
    const id = uniqueId();

    this.props.onSubmit({
      id,
      title,
      amount: parseFloat(amount),
      currency,
      category,
    });
    this.setState(defaultState);
  };

  isValid() {
    const { title, amount } = this.state;
    return !!(title && amount);
  }

  render() {
    const { currencies, categories } = this.props;

    const { title, amount, currency, category } = this.state;

    return (
      <form className="NewExpense" onSubmit={this.handleSubmit}>
        <div className="NewExpense--controls">
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={amount}
              min="0"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Currencies</label>
            <CurrencySelect
              currencies={currencies}
              value={currency}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Categories</label>
            <CategorySelect
              categories={categories}
              value={category}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <input type="submit" disabled={!this.isValid()} />
      </form>
    );
  }
}
