import React, { Component } from 'react';

export default class CurrencySelect extends Component {
  render() {
    const { currencies, value } = this.props;

    return (
      <select name="currency" value={value} onChange={this.props.onChange}>
        {currencies.map(currency => (
          <option key={currency.id} value={currency.id}>{currency.currency}</option>
        ))}
      </select>
    );
  }
}
