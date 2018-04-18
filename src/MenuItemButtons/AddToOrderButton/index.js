import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

class AddToOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="add_button"
        onClick={
          () => 
            this.props.addItemToOrder(this.props.menu_item)}>
        <FaPlus />
      </button>
    )
  }
}

export default AddToOrderButton