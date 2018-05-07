import React from 'react'
import CancelCurrentOrderButton from './CancelCurrentOrderButton'
import CompleteCurrentOrderButton from './CompleteCurrentOrderButton'

function OrderActionButtons(props) {
  return (
    <div className="order_action_buttons">
      <CompleteCurrentOrderButton completeOrder={props.completeOrder} />
      <CancelCurrentOrderButton cancelOrder={props.cancelOrder} />
    </div>
  )
}

export default OrderActionButtons

// FInish up requirements for SP project and prep for code review next session
// Investigate Universe - Read Code and see how other people are solving problems
// Read OS project source code