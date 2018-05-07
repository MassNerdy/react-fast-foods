import React from 'react'
import Menu from '../Menu'
import Order from '../Order'
import OrdersList from '../OrdersList'
import data from '../menuItems.json'

export default class DriveThruTerminal extends React.Component {
  constructor(props) {
    super(props)
    this.renderOrdersList = this.renderOrdersList.bind(this)
    this.uniqueOrderId = this.uniqueOrderId.bind(this)
    this.addItemToOrder = this.addItemToOrder.bind(this)
    this.removeItemFromOrder = this.removeItemFromOrder.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)

    this.state = {
      current_order: [],
      menu_items: data,
      orders: [],
      next_order_id: 1
    }
  }

  renderOrdersList(orders) {
    if (orders.length > 0) {
      return (
        <OrdersList orders={this.state.orders} />
      )
    } else {
      return
    }
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
      this.setState((prevState) => ({
        current_order: [...prevState.current_order, { 
          item_name: menu_item.system_name,
          item: menu_item,
          quantity: 1,
        }],
      }))
    }
  }

  removeItemFromOrder(menu_item) {
    let co, co_filter, contains_menu_item, menu_item_index
    co = this.state.current_order
    co_filter = co.filter(item => item.item_name === menu_item.system_name)
    contains_menu_item = co_filter.length === 1
    menu_item_index = co.indexOf(co_filter[0])

    if (contains_menu_item && co[menu_item_index].quantity >= 2) {
      this.setState((prevState, props) => (
        co[menu_item_index].quantity, co[menu_item_index].quantity -= 1
      ))
    } else if (contains_menu_item && co[menu_item_index].quantity === 1) {
      co.splice(co.indexOf(co[menu_item_index]), 1)
      this.setState((prevState) => ({
        current_order: co,
      }))
    }
  }

  uniqueOrderId() {
    return Math.random().toString(36).substr(2, 16);
  }

  completeOrder(){
    if (this.state.current_order.length > 0) {
      this.setState((prevState, props) => ({
        orders: [
          ...prevState.orders,
          {
            order_id: prevState.next_order_id,
            order_items: prevState.current_order,
            created_at: (new Date).toLocaleTimeString(),
            order_total: prevState.current_order.order_total
          }
        ],
        current_order: [],
        next_order_id: prevState.next_order_id + 1
      }))
    }
  }

  cancelOrder() {
    if (this.state.current_order.length > 0) {
      if (window.confirm("Are you sure you want to cancel this order? You cannot get this information back if you confirm.")) {
        this.setState((prevState) => ({
          current_order: []
        }))
      }
    }
  }
  
  render () {  
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          <Order 
            completeOrder={this.completeOrder}
            cancelOrder={this.cancelOrder}
            current_order={this.state.current_order} />
          <Menu 
            menu_items={this.state.menu_items} 
            addItemToOrder={this.addItemToOrder}
            removeItemFromOrder={this.removeItemFromOrder} />
          { this.renderOrdersList(this.state.orders) }
        </div>
      </div>
    )
  }
}