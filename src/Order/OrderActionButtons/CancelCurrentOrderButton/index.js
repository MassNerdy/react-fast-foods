import React from 'react'
import TiCancel from 'react-icons/lib/ti/cancel'

class CancelCurrentOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="cancel_order_button"
        onClick={
          () =>
            this.props.cancelOrder()} >
        <TiCancel />
      </button>
    )
  }
}

export default CancelCurrentOrderButton