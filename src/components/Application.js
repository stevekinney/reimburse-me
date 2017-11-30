import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import ExpenseList from './ExpenseList';
import ExchangeRatesList from './ExchangeRateList';
import NewExpense from './NewExpense';
import NewCategory from './NewCategory';

import './Application.css';

const exchangeRates = [
  { id: uniqueId(), currency: 'USD', rate: 1 },
  { id: uniqueId(), currency: 'EUR', rate: 1.2 },
  { id: uniqueId(), currency: 'COP', rate: 0.03 },
  { id: uniqueId(), currency: 'GBP', rate: 1.25 },
];

const categories = [
  { id: uniqueId(), title: 'General' },
  { id: uniqueId(), title: 'Meals' },
  { id: uniqueId(), title: 'Hotel' },
  { id: uniqueId(), title: 'Internet' },
];

const expenses = [
  {
    id: uniqueId(),
    title: "Dinner at Manny's",
    amount: 15,
    currency: exchangeRates[0].id,
    category: categories[1].id,
  },
  {
    id: uniqueId(),
    title: 'Peanuts at the airport',
    amount: 4,
    currency: exchangeRates[2].id,
    category: categories[1].id,
  },
  {
    id: uniqueId(),
    title: 'Airplane wifi',
    amount: 8.99,
    currency: exchangeRates[0].id,
    category: categories[3].id,
  },
  {
    id: uniqueId(),
    title: "Dinner at Manny's (again)",
    amount: 10,
    currency: exchangeRates[3].id,
    category: categories[1].id,
  },
];

export default class Application extends Component {
  state = { expenses, exchangeRates, categories };

  addExpense = expense => {
    const expenses = [...this.state.expenses, expense];
    this.setState({ expenses });
  };

  updateExpense = (id, props) => {
    const expenses = this.state.expenses.map(expense => {
      if (expense.id !== id) return expense;
      return { ...expense, ...props };
    });
    this.setState({ expenses });
  }

  removeExpense = id => {
    const expenses = this.state.expenses.filter(expense => expense.id !== id);
    this.setState({ expenses });
  };

  addExchangeRate = exchangeRate => {
    const exchangeRates = [...this.state.exchangeRates, exchangeRate];
    this.setState({ exchangeRates });
  };

  updateExchangeRate = (id, newRate) => {
    const exchangeRates = this.state.exchangeRates.map(exchangeRate => {
      if (exchangeRate.id !== id) return exchangeRate;
      return { ...exchangeRate, rate: newRate };
    });
    this.setState({ exchangeRates });
  }

  addCategory = category => {
    const categories = [...this.state.categories, category];
    this.setState({ categories });
  };

  render() {
    return (
      <div className="Application">
        <h1>Reimburse Me, Please</h1>
        <NewExpense
          categories={this.state.categories}
          currencies={this.state.exchangeRates}
          onSubmit={this.addExpense}
        />
        <ExpenseList
          categories={this.state.categories}
          currencies={this.state.exchangeRates}
          expenses={this.state.expenses}
          onRemoveExpense={this.removeExpense}
          onUpdateExpense={this.updateExpense}
        />
        <section className="Metadata">
          <ExchangeRatesList
            exchangeRates={this.state.exchangeRates}
            onAddExchangeRate={this.addExchangeRate}
            onUpdateExchangeRate={this.updateExchangeRate}
          />
          <NewCategory onAddCategory={this.addCategory} />
        </section>
      </div>
    );
  }
}
