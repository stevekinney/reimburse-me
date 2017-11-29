import React, { Component } from 'react';

import './ExchangeRateItem.css';

export default class ExchangeRateItem extends Component {
  render() {
    const { exchangeRate } = this.props;

    return (
      <tr className="ExchangeRateItem">
        <td>{exchangeRate.currency}</td>
        <td>
          <label>Rate</label>
          <input type="number" value={exchangeRate.rate} />
        </td>
      </tr>
    );
  }
}
