import React from 'react'
import OrderSummaryCard from '../OrderSummaryCard'
import Timer from '../Timer'

const orderTotal = (order_items) => {
  let total = 0;
  order_items.forEach((oi) => { 
    let sub_total = oi.quantity * oi.item.price
    total += sub_total
  });
  return total;
}

const renderOrderCards = (orders, props) =>
  orders.map((order) =>
    <OrderSummaryCard
      id={order.order_id}
      item_count={order.order_items.length}
      order_total={ orderTotal(order.order_items) }
      created_at={order.created_at}
      archiveOrder={props.archiveOrder}
      cancelOrder={props.cancelOrder} />
  )

function OrdersList(props) {
  return (
    <div className="orders_list">
      { renderOrderCards(props.orders, props) }
    </div>
  ) 
}

export default OrdersList