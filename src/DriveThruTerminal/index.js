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
    this.cancelCurrentOrder = this.cancelCurrentOrder.bind(this)
    this.archiveOrder = this.archiveOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)

    this.state = {
      current_order: [],
      menu_items: data,
      orders: [],
      archived_orders: [],
      next_order_id: 1,
      managerNotified: undefined
    }
  }

  renderOrdersList(orders, archiveOrder, cancelOrder, managerNotified) {
    if (orders.length == 0) {
      return
    } else if (orders.length >= 4 && this.state.managerNotified != true) {
      if (window.confirm("The orders are stacking up! Contact the Manger on Duty!")) {
        this.setState((prevState) => ({
          managerNotified: true
        }))
      }
    }
    return (
      <OrdersList
        managerNotified = {managerNotified}
        orders={orders}
        archiveOrder={archiveOrder}
        cancelOrder={cancelOrder} />
    )
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
            order_total: prevState.current_order.order_total,
            order_status: "open"
          }
        ],
        current_order: [],
        next_order_id: prevState.next_order_id + 1
      }))
    }
  }

  cancelCurrentOrder() {
    if (this.state.current_order.length > 0) {
      if (window.confirm("Are you sure you want to cancel this order? You cannot get this information back if you confirm.")) {
        this.setState((prevState) => ({
          current_order: []
        }))
      }
    }
  }

  archiveOrder(id) {
    let oo, order_filter, contains_order, order_index, archivable_order
    oo = this.state.orders
    order_filter = oo.filter(order => order.order_id === id)
    contains_order = order_filter.length === 1
    order_index = oo.indexOf(order_filter[0])
    archivable_order = oo[order_index]
    oo.splice(order_index, 1)
    debugger
    this.setState((prevState, orders) => ({
      archived_orders: [...prevState.archived_orders, archivable_order],
      orders: oo
    }))
  }

  cancelOrder(id) {
    let oo, order_filter, contains_order, order_index, archivable_order
    oo = this.state.orders
    order_filter = oo.filter(order => order.order_id === id)
    contains_order = order_filter.length === 1
    order_index = oo.indexOf(order_filter[0])
    oo.splice(order_index, 1)
    if (window.confirm("Are you sure you want to delete this order? You cannot get this order back if you confirm.")) {
      this.setState((prevState, orders) => ({
        orders: oo
      }))
    }
  }
  
  render () {  
    return (
      <div id="drive-thru-terminal">
        <h3>React Fast Foods</h3>
        <div id="order-portal">
          <Order 
            completeOrder={this.completeOrder}
            cancelCurrentOrder={this.cancelCurrentOrder}
            current_order={this.state.current_order} />
          <Menu 
            menu_items={this.state.menu_items} 
            addItemToOrder={this.addItemToOrder}
            removeItemFromOrder={this.removeItemFromOrder} />
          { this.renderOrdersList(
              this.state.orders, 
              this.archiveOrder, 
              this.cancelOrder,
              this.state.managerNotified) }
        </div>
      </div>
    )
  }
}