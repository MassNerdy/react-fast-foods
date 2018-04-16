import React from 'react'
import OrderItem from '../OrderItem'

  const item_list = [
    {item_name:"The Burger", qty:100, price: 5},
    {item_name:"The Hot Dog", qty: 2, price: 5},
    {item_name:"A Cookie", qty: 3, price: 2}
  ]

const renderItemList = item_list.map((item, qty) =>
  <OrderItem  
    key={item.item_name}
    item_name={item.item_name}
    qty={item.qty}
    price={item.price} />
)

function ItemList(item_list){
  return (
    <ul className="order-item-list">
      { renderItemList }
    </ul>
  )
}

export default ItemList