import React from 'react'
import Order from '../Order'

const renderOrders = (orders) =>
  orders.map((item) =>
    <Order
      id = {item.id}
      total = {item.total} />
  )

function OrdersList(props) {
  return (
    <div className="orders_list">
      { renderOrders(props.orders) }
    </div>
  ) 
}

export default OrdersList