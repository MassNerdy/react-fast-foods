import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'


class AddToOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="add_button"
        addItemToOrder={ this.props.addItemToOrder }>
        <FaPlus />
      </button>
    )
  }
}

export default AddToOrderButton