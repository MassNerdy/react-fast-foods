import React from 'react'
import CancelOrderButton from './CancelOrderButton'
import CompleteOrderButton from './CompleteOrderButton'

function OrderActionButtons(props) {
  return (
    <div className="order_action_buttons">
      <CompleteOrderButton />
      <CancelOrderButton />
    </div>
  )
}

export default OrderActionButtons