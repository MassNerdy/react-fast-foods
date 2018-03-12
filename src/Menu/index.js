import React, { Component } from 'react'
import MenuItem from '../MenuItem'

class Menu extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      current_order: [],
    }
    this.eachMenuItem = this.eachMenuItem.bind(this)
  }

  eachMenuItem (data, i) {
    return (
      <button>
        <MenuItem />
      </button>
    )
  }

  save(e) {
		e.preventDefault()
		this.props.onChange(this.order.value, this.props.index)
		this.setState({
			editing: false
		})
	}

  render() {
    return(
      <form id="order-form" onSubmit={this.saveOrder}>
        <div id="menu">
          {this.state.data.map(this.eachMenuItem)}
        </div>
      </form>
    )
  }
}

export default Menu