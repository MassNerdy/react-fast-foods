import React, { Component } from 'react'
import OrderStatusBoard from '../OrderStatusBoard'

class DriveThruTerminal extends Component {
  render() {
    return (
      <div id="drive-thru-terminal-wrapper">
        <h2>React Fast Foods</h2>
        <div id="order-portal">
          <Menu />
          <CurrentOrder />
          <OrderStatusBoard />
        </div>
      </div>
    )
  }
}

export default DriveThruTerminal