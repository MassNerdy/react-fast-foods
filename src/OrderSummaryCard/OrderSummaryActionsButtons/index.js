import React from 'react'
import CancelOrderButton from './CancelOrder'
import ArchiveOrderButton from './ArchiveOrder'

function OrderSummaryActionsButtons(props) {
  return (
    <div className="order_summary_actions_buttons">
      <ArchiveOrderButton 
        archiveOrder={props.archiveOrder} 
        order_id={props.id} />
      <CancelOrderButton 
        cancelOrder={props.cancelOrder}
        order_id={props.id} />
    </div>
  )
}

export default OrderSummaryActionsButtons

// Get some poor sucker to help me out