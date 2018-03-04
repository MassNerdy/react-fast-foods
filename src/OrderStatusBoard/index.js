import React, { Component } from 'react'
import Order from '../Order'
import FaPlus from 'react-icons/lib/fa/plus'
import FaPencil from 'react-icons/lib/fa/pencil'

class OrderStatusBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      open_orders: [],
      completed_orders: [],
    }
    this.add = this.add.bind(this)
    this.eachOrder = this.eachOrder.bind(this)
    this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
    this.nextId = this.nextId.bind(this)
  }
    
  add(order) {
    this.setState(prevState => ({
      editing: true,
      open_orders: [
        ...prevState.open_orders,
        {
          id: this.nextId(),
          order: order,
        }
      ]
    }))
  }

  nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
  }
  
  update(new_menu_items, i) {
		console.log('updating item at index', i, new_menu_items)
		this.setState(prevState => ({
			open_orders: prevState.open_orders.map(
				order => (order.id !== i) ? order : {...order, order: new_menu_items}
			)
		}))
  }
  
  remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			open_orders: prevState.open_orders.filter(order => order.id !== id)
		}))
	}
  
  eachOrder(order, i) {
		return (
			<Order key={order.id}
          index={order.id}
				  onChange={this.update}
				  onRemove={this.remove}>
				  {order.order}
		    </Order>
		)
  }

  render() {
    return (
      <div id="order_list">
        <button onClick={this.add.bind(null, "New Order")}
						id="add">New Order<FaPlus /></button>
        <div id="open_orders">
          <h4>Open Orders</h4>
          {this.state.open_orders.map(this.eachOrder)}
        </div>
        <div id="completed_orders">
          <h4>Completed Orders</h4>
        </div>
      </div>
    )
  }
}

export default OrderStatusBoard