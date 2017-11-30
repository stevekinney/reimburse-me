import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './NewExchangeRate.css';

const defaultState = {
  currency: '',
  rate: '',
};

export default class NewExpense extends Component {
  state = defaultState;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { onAddExchangeRate } = this.props;
    const { currency, rate } = this.state;
    const id = uniqueId();

    onAddExchangeRate({ currency, rate, id });
    this.setState(defaultState);
  }

  isValid() {
    const { currency, rate } = this.state;
    return !(currency && rate);
  }

  render() {
    const { currency, rate } = this.state;

    return (
      <form className="NewExchangeRate" onSubmit={this.handleSubmit}>
        <h3>Add New Exchange Rate</h3>
        <div className="NewExchangeRate--controls">
          <div>
            <label>Currency</label>
            <input type="text" placeholder="Currency" name="currency" value={currency} onChange={this.handleChange} />
          </div>
          <div>
            <label>Rate</label>
            <input type="number" placeholder="Rate" name="rate" value={rate} onChange={this.handleChange} min="0" step="0.01" />
          </div>
        </div>
        <input type="submit"  disabled={this.isValid()} />
      </form>
    );
  }
}
