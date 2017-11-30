import React, { Component } from 'react';

import ExchangeRateItem from './ExchangeRateItem';
import NewExchangeRate from './NewExchangeRate';

export default class ExchangeRateList extends Component {
  render() {
    const { exchangeRates, onAddExchangeRate, onUpdateExchangeRate } = this.props;

    return (
      <section>
        <h2>Exchange Rates</h2>
        <table className="ExchangeRateList">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {exchangeRates.map(exchangeRate => (
              <ExchangeRateItem
                key={exchangeRate.id}
                exchangeRate={exchangeRate}
                onUpdateExchangeRate={onUpdateExchangeRate}
              />
            ))}
          </tbody>
        </table>
        <div>
          <NewExchangeRate onAddExchangeRate={onAddExchangeRate} />
        </div>
      </section>
    );
  }
}
