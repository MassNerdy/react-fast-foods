import React from 'react'
import FaFlagCheckered from 'react-icons/lib/fa/flag-checkered'

class CompleteCurrentOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="complete_order_button"
        onClick={
          () => 
            this.props.completeOrder()} >
        <span className="complete_order_label">Send Order to Kitchen</span>
        <FaFlagCheckered />
      </button>
    )
  }
}

export default CompleteCurrentOrderButton