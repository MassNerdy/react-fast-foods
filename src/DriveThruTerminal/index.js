import React from 'react'
import Menu from '../Menu'

function DriveThruTerminal(props) {
  return (
    <div id="drive-thru-terminal">
      <h3>React Fast Foods</h3>
      <div id="order-portal">
        {/* Order page content */}
        <Menu />
      </div>
    </div>
  )
}

export default DriveThruTerminal