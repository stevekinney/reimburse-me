import React, { Component } from 'react';

import './NewCategory.css';

const defaultState = {
  title: '',
};

export default class NewExpense extends Component {
  state = defaultState;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    this.props.onAddCategory({ title });
    this.setState(defaultState);
  }

  render() {
    const { title } = this.state;

    return (
      <section>
        <h2>Add New Category</h2>
        <form className="NewCategory" onSubmit={this.handleSubmit}>
          <div className="NewCategory--controls">
            <div>
              <label>Category Name</label>
              <input
                type="text"
                placeholder="Category"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <input type="submit" disabled={!title} />
        </form>
      </section>
    );
  }
}
