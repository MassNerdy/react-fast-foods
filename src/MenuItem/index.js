import React, { Component } from 'react'
import data from '../menuItems.json';

class MenuItem extends Component {
  render() {
    return (
      <div id="menu_item">
        <span className="item_name">Item Name</span>
        <div className="allergens">Allergens</div>
        <button className="add_special_instructions">Add Note</button>
      </div>
    )
  }
}

export default MenuItem