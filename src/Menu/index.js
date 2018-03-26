import React from 'react'
import data from '../menuItems.json'
import MenuItem from '../MenuItem'

const renderMenuItems = data.map((item) => 
    <MenuItem
      type = {item.type}
      item_name = {item.item_name}
      system_name = {item.system_name}
      price = {item.price}
      allergens = {item.allergens} />
  );

function Menu() { 
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