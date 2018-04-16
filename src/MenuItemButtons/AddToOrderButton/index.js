import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'


class AddToOrderButton extends React.Component {
  constructor(props) {
    super(props)
    this.addItemToOrder = this.addItemToOrder.bind(this)
  }
  
  addItemToOrder (menu_item) {
    console.log(menu_item)
    console.log("Added to the order!")
  }

  render() {
    return(
      <button 
        className="add_button"
        onClick={ this.addItemToOrder(this.props.menu_item) }>
        <FaPlus />
      </button>
    )
  }
}

export default AddToOrderButton