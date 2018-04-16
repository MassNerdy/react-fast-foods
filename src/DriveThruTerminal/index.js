import React from 'react'
import Menu from '../Menu'
import Order from '../Order'
import OrdersList from '../OrdersList'
import data from '../menuItems.json'
import order_data from '../OrdersList.json'

const menu_items = data

export default class DriveThruTerminal extends React.Component {
  constructor(props) {
    super(props);
    this.addItemToOrder = this.addItemToOrder.bind(this)
    this.state = {
      orders: order_data,
      current_order: [],
    }
  
  addItemToOrder(){
    this.setState((prevState, props) => {
      return {current_order: prevState.current_order.push(this.props.menu_item)}
    });
    console.log(this.props.menu_item.item_name)
    console.log("Added to the order!")
  }
  } render () {
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          {/* Order page content */}
          <Order current_order={this.state.current_order}/>
          <Menu menu_items={menu_items} addItemToOrder={this.addItemToOrder}/>
          <OrdersList orders={this.props.orders}/>
        </div>
      </div>
    )
  }
}

// GET STATE OF ORDERS INTO CONSTRUCTOR FOR DRIVETHRUTERMINAL COMPONENT
