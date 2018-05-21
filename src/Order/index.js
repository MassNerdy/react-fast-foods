import React from 'react'
import ItemList from './ItemList'
import OrderActionButtons from './OrderActionButtons'

const currentOrderTotal = (current_order) => {
  let total = 0;
  current_order.forEach((oi) => { 
    let sub_total = oi.quantity * oi.item.price
    total += sub_total
  });
  if (current_order.length > 0) {
    return (
      <div className="order_total_container">
        <span className="order_total">Order Total: ${total}</span>
      </div>
    )
  }
}

function Order(props) {
  return (
    <div className="order">
      <ItemList items={props.current_order}/>
      {currentOrderTotal(props.current_order)}
      <OrderActionButtons 
        completeOrder={props.completeOrder}
        cancelOrder={props.cancelCurrentOrder} />
    </div>
  )
} 

export default Order