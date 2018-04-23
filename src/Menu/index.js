import React from 'react'
import MenuItem from '../MenuItem'

const renderMenuItems = (menu_items, addFunction, removeFunction) =>
  menu_items.map((item) => 
    <MenuItem
      key = {item.system_name}
      type = {item.type}
      item_name = {item.item_name}
      system_name = {item.system_name}
      price = {item.price}
      allergens = {item.allergens}
      addItemToOrder = {addFunction}
      removeItemFromOrder = {removeFunction} />
  );

function Menu(props) { 
  return (
    <div className="main-menu">
      <ul className="item-list">
        { renderMenuItems(props.menu_items, props.addItemToOrder, props.removeItemFromOrder) }
      </ul>
    </div> 
  )
}

export default Menu