import React from 'react'
import Menu from '../Menu'
import Order from '../Order'

function DriveThruTerminal(props) {
  return (
    <div id="drive-thru-terminal">
      <h3>React Fast Foods</h3>
      <div id="order-portal">
        {/* Order page content */}
        <Order />
        <Menu />
      </div>
    </div>
  )
}

export default DriveThruTerminal