import React from 'react'
import AddToOrderButton from './AddToOrderButton'
import RemoveFromOrderButton from './RemoveFromOrderButton'

function MenuItemButtons(props) {
  return (
    <div className="menu_item_buttons">
      <AddToOrderButton menu_item={props.menu_item} addToCurrentOrdere={props.addToCurrentOrder} />
      <RemoveFromOrderButton />
      <p className="quantity">Qty</p>
    </div>
  )
}

export default MenuItemButtons