import React, { Component } from 'react';

import './NewExchangeRate.css';

const defaultState = {
  currency: '',
  rate: '',
};

export default class NewExpense extends Component {
  state = defaultState;

  render() {
    const { currency, rate } = this.state;

    return (
      <form className="NewExchangeRate">
        <h3>Add New Exchange Rate</h3>
        <div className="NewExchangeRate--controls">
          <div>
            <label>Currency</label>
            <input type="text" placeholder="Currency" value={currency} />
          </div>
          <div>
            <label>Rate</label>
            <input type="number" placeholder="Rate" value={rate} />
          </div>
        </div>
        <input type="submit" />
      </form>
    );
  }
}
