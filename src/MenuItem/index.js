import React from 'react'
import MenuItemButtons from '../MenuItemButtons'

const JoinArray = (array) =>
  array.join(', ')

function MenuItem(props) {
  return(
    <div className={"menu_item " + props.type}>
      <div className="item_heading_container">
        <span className={"itemName " + props.system_name}>{props.itemName}</span>
        <span className="dotted_spacer" />
        <span className="price">${props.price}</span>
        <MenuItemButtons />
      </div>
      {/* <span className="allergens">Allergens: {JoinArray(props.allergens)}</span> */}
    </div>
  )
}

export default MenuItem