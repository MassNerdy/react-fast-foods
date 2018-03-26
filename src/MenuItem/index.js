import React from 'react'
import MenuItemButtons from '../MenuItemButtons'

function MenuItem(props) {
  return(
    <div className={"menu_item " + props.type}>
      <div className="item_heading_container">
        <span className={"itemName " + props.system_name}>{props.item_name}</span>
        <span className="dotted_spacer" />
        <span className="price">${props.price}</span>
        <MenuItemButtons />
      </div>
    </div>
  )
}

export default MenuItem