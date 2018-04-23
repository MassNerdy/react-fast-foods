import React from 'react'
import OrderItem from '../OrderItem'

const renderItemList = (items) =>
  items.map((oi) =>
    <OrderItem
      key={oi.item.system_name}
      item_name={oi.item.item_name}
      price={oi.item.price}
      qty={oi.quantity}
      subtotal={oi.quantity * oi.item.price} />
  )

function ItemList(props){
  return (
    <ul className="order-item-list">
      { renderItemList(props.items) }
    </ul>
  )
}

export default ItemList