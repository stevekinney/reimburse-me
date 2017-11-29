import React, { Component } from 'react';

import './NewCategory.css';

const defaultState = {
  title: '',
};

export default class NewExpense extends Component {
  state = defaultState;

  render() {
    const { title } = this.state;

    return (
      <section>
        <h2>Add New Category</h2>
        <form className="NewCategory">
        <div className="NewCategory--controls">
          <div>
            <label>Category Name</label>
            <input type="text" placeholder="Category" value={title} />
          </div>
        </div>
        <input type="submit" />
      </form>
      </section>
    );
  }
}
