import React from 'react'
import FaMinus from 'react-icons/lib/fa/minus'

const RemoveItemFromOrder = () => {
  console.log("Removed Item from Order")
}

function RemoveFromOrderButton() {
  return(
    <button 
      className="remove_button"
      onClick={RemoveItemFromOrder}>
      <FaMinus/>
    </button>
  )
}

export default RemoveFromOrderButton