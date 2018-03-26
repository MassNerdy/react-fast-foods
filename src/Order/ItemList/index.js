import React from 'react'
import OrderItem from '../OrderItem'
import data from '../../menuItems.json'

const item_list = [
  {item_name:"The Burger", qty:100, price: 5},
  {item_name:"The Hot Dog", qty: 2, price: 5},
  {item_name:"A Cookie", qty: 3, price: 2}
]

const renderItemList = item_list.map((item, qty) =>
  <OrderItem  
    item_name={item.item_name}
    qty={item.qty}
    price={item.price} />
)

function ItemList(item_list){
  return (
    <ul>
      { renderItemList }
    </ul>
  )
}

export default ItemList