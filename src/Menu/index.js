import React from 'react'
import data from '../menuItems.json'
import MenuItem from '../MenuItem'

const renderMenuItems = data.map((item) => 
    <MenuItem
      type = {item.type}
      itemName = {item.itemName}
      system_name = {item.system_name}
      price = {item.price}
      allergens = {item.allergens} />
  );

function Menu(props) { 
  return (
    <div className="main-menu">
      <p>Select items to add to a new order</p>
      <ul className="item-list">
        { renderMenuItems }
      </ul>
    </div> 
  )
}

export default Menu