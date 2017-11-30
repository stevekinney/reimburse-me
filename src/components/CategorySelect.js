import React, { Component } from 'react';

export default class CategorySelect extends Component {
  render() {
    const { categories, value } = this.props;

    return (
      <select name="category" value={value} onChange={this.props.onChange}>
        {categories.map(category => (
          <option value={category.id}>{category.title}</option>
        ))}
      </select>
    );
  }
}
