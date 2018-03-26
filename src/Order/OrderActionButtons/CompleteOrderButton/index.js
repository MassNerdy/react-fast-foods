import React from 'react'
import FaFlagCheckered from 'react-icons/lib/fa/flag-checkered'

const CompleteOrder = () => {
  console.log("Complete order and send to the kitchen?")
}

function CompleteOrderButton() {
  return(
    <button 
      className="complete_order_button"
      onClick={CompleteOrder}>
      <span className="complete_order_label">Send Order to Kitchen</span>
      <FaFlagCheckered />
    </button>
  )
}

export default CompleteOrderButton