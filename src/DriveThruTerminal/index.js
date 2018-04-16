import React from 'react'
import Menu from '../Menu'
import Order from '../Order'
import OrdersList from '../OrdersList'
import data from '../menuItems.json'
import order_data from '../ordersList.json'

const menu_items = data
class DriveThruTerminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: order_data
    }
  } render () {
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          {/* Order page content */}
          <Order />
          <Menu menu_items={menu_items}/>
          {/* <OrdersList orders={this.state.orders}/> */}
        </div>
      </div>
    )
  }
}

export default DriveThruTerminal

// GET STATE OF ORDERS INTO CONSTRUCTOR FOR DRIVETHRUTERMINAL COMPONENT
