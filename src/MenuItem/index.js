import React, { Component } from 'react'
import data from '../menuItems.json';

class MenuItem extends Component {
  render() {
    return (
      <div id="menu_item">
        <p> className="item_name">{data.name}</p>
        <p className="allergens">{data.allergens}</p>
        <p className="add_special_instructions">{data.special_instructions}</p>
      </div>
    )
  }
}

export default MenuItem