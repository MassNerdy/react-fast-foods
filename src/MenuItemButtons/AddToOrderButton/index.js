import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

const AddItemToOrder = () => {
  console.log("Added to the order!")
}

function AddToOrderButton(props) {
  return(
    <button 
      className="add_button"
      onClick={AddItemToOrder}>
      <FaPlus />
    </button>
  )
}

export default AddToOrderButton