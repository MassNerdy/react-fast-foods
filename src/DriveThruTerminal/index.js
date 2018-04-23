import React from 'react'
import Menu from '../Menu'
import Order from '../Order'
import data from '../menuItems.json'
import order_data from '../OrdersList.json'

export default class DriveThruTerminal extends React.Component {
  constructor(props) {
    super(props)
    this.addItemToOrder = this.addItemToOrder.bind(this)
    this.removeItemFromOrder = this.removeItemFromOrder.bind(this)
    this.state = {
      current_order: [],
      menu_items: data,
      orders: order_data
    }
  }

  removeItemFromOrder(menu_item) {
    console.log("Remove Item!")
  }
  
  addItemToOrder(menu_item) {
    let co, co_filter, contains_menu_item, menu_item_index
    co = this.state.current_order
    co_filter = co.filter(item => item.item_name === menu_item.system_name)
    contains_menu_item = co_filter.length === 1
    menu_item_index = co.indexOf(co_filter[0])

    if (contains_menu_item) {
      this.setState((prevState, props) => (
        co[menu_item_index].quantity, co[menu_item_index].quantity += 1
      ))
    } else {
      this.setState((prevState, sysName) => ({
        current_order: [...prevState.current_order, { 
          item_name: menu_item.system_name,
          item: menu_item, 
          quantity: 1
        }],
      }))
    }
  } render () {  
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          <Order current_order={this.state.current_order} />
          <Menu 
            menu_items={this.state.menu_items} 
            addItemToOrder={this.addItemToOrder}
            removeItemFromOrder={this.removeItemFromOrder} />
            {/*<OrdersList orders={this.props.orders} />*/}
        </div>
      </div>
    )
  }
}