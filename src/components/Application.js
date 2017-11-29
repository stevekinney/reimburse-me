import React, { Component } from 'react';

import ExpenseList from './ExpenseList';
import ExchangeRatesList from './ExchangeRateList';
import NewExpense from './NewExpense';
import NewCategory from './NewCategory';

import './Application.css';

const defaultData = [
  { id: 1, title: 'Dinner at Manny\'s', amount: '1', currency: 'USD', category: 'General' },
  { id: 2, title: 'Peanuts at the airport', amount: '1', currency: 'USD', category: 'General' },
  { id: 3, title: 'Airplane wifi', amount: '1', currency: 'USD', category: 'General' },
  { id: 4, title: 'Dinner at Manny\'s (again)', amount: '1', currency: 'USD', category: 'General' },
];

const exchangeRates = [
  { id: 1, currency: 'EUR', rate: 1.2 },
  { id: 2, currency: 'COP', rate: 0.03 },
  { id: 3, currency: 'GBP', rate: 1.25 },
];

export default class Application extends Component {
  state = { expenses: defaultData };

  render() {
    return (
      <div className="Application">
        <h1>Reimburse Me, Please</h1>
        <NewExpense />
        <ExpenseList expenses={this.state.expenses} />
        <section className="Metadata">
          <ExchangeRatesList exchangeRates={exchangeRates} />
          <NewCategory />
        </section>
      </div>
    );
  }
}
