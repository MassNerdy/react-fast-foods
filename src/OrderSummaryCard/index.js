import React from 'react'
import Timer from '../Timer'
import OrderSummaryActionsButtons from "./OrderSummaryActionsButtons"

function OrderSummaryCard(props) {
  return (
    <div className="order-summary-card">
      <p className="order_id">Order #{props.id}</p>
      <p className="created_at">{props.created_at}</p>
      <p className="order_summary_total">Total: ${props.order_total}</p>
      <Timer />
      <OrderSummaryActionsButtons 
        archiveOrder={props.archiveOrder}
        cancelOrder={props.cancelOrder}
        id={props.id} />
    </div>
  )
} 

export default OrderSummaryCard