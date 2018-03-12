import React, { Component } from 'react'
import data from '../menuItems.json';

const JoinArray = (array) =>
  array.join(', ')

class MenuItem extends Component {
  render() {
    return (
      <div id="menu_item">
        <p className="item_name">{this.props.name}</p>
        <p className="allergens">{JoinArray(this.props.allergens)}</p>
      </div>
    )
  }
}

export default MenuItem