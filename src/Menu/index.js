import React from 'react'
import MenuItem from '../MenuItem'

const renderMenuItems = (props) =>
  props.menu_data.map((item) => 
    <MenuItem
      key = {item.system_name}
      type = {item.type}
      item_name = {item.item_name}
      system_name = {item.system_name}
      price = {item.price}
      allergens = {item.allergens}
      {...props} />
  );

function Menu(props) { 
  return (
    <div className="main-menu">
      <ul className="item-list">
        { renderMenuItems(props) }
      </ul>
    </div> 
  )
}

export default Menu