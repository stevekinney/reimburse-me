import React, { Component } from 'react';

import './ExchangeRateItem.css';

export default class ExchangeRateItem extends Component {
  handleChange = event => {
    const { exchangeRate } = this.props;
    const rate = parseFloat(event.target.value);
    this.props.onUpdateExchangeRate(exchangeRate.id, rate);
  };

  render() {
    const { exchangeRate } = this.props;

    return (
      <tr className="ExchangeRateItem">
        <td>{exchangeRate.currency}</td>
        <td>
          <label>Rate</label>
          <input
            type="number"
            step="0.1"
            value={exchangeRate.rate}
            onChange={this.handleChange}
            disabled={exchangeRate.currency === 'USD'}
          />
        </td>
      </tr>
    );
  }
}
