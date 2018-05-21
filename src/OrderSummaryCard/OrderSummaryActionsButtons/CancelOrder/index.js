import React from 'react'
import TiCancel from 'react-icons/lib/ti/cancel'

class CancelOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="cancel_order_button"
        onClick={
          () =>
            this.props.cancelOrder(this.props.order_id)} >
        <TiCancel />
      </button>
    )
  }
}

export default CancelOrderButton