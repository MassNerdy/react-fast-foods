import React from 'react'
import FaFlagCheckered from 'react-icons/lib/fa/flag-checkered'

const CompleteOrder = () => {
  
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