import React from 'react'
import FaMinus from 'react-icons/lib/fa/minus'

const RemoveItemFromOrder = () => {
  console.log("Removed Item from Order")
}
class RemoveFromOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="add_button"
        onClick={
          () => 
            this.props.removeItemFromOrder(this.props.menu_item)}>
        <FaMinus />
      </button>
    )
  }
}

export default RemoveFromOrderButton