import React from 'react'
import Menu from '../Menu'
import Order from '../Order'
import data from '../menuItems.json'
import order_data from '../OrdersList.json'

export default class DriveThruTerminal extends React.Component {
  constructor(props) {
    super(props)
    this.addItemToOrder = this.addItemToOrder.bind(this)

    this.state = {
      orders: order_data,
      current_order: [],
      menu_items: data,
    }
  }
  
  addItemToOrder(menu_item) {
    this.setState((prevState) => {
      {current_order: [...prevState.current_order, menu_item]}
    })
  } render () {  
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          <Order current_order={this.state.current_order} />
          <Menu menu_items={this.state.menu_items} addItemToOrder={this.addItemToOrder} />
          {/*<OrdersList orders={this.props.orders} />*/}
        </div>
      </div>
    )
  }
}