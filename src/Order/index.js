import React from 'react'
import ItemList from './ItemList'
import OrderActionButtons from './OrderActionButtons'

function Order(props) {
  return (
    <div className="order">
      <ItemList />
      <div className="order_total" />
      <OrderActionButtons />
    </div>
  )
} 

export default Order