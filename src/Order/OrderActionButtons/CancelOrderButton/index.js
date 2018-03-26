import React from 'react'
import TiCancel from 'react-icons/lib/ti/cancel'

const CancelOrder = () => {
  console.log("Are you sure you want to cancel the order?")
}

function CancelOrderButton() {
  return(
    <button 
      className="cancel_order_button"
      onClick={CancelOrder}>
      <TiCancel/>
    </button>
  )
}

export default CancelOrderButton