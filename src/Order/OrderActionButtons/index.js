import React from 'react'
import CancelCurrentOrderButton from './CancelCurrentOrderButton'
import CompleteCurrentOrderButton from './CompleteCurrentOrderButton'

function OrderSummaryActionButtons(props) {
  return (
    <div className="order_summary_action_buttons">
      <CompleteCurrentOrderButton completeOrder={props.completeOrder} />
      <CancelCurrentOrderButton cancelOrder={props.cancelOrder} />
    </div>
  )
}

export default OrderSummaryActionButtons