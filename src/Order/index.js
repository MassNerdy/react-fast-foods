import React, { Component } from 'react'
import MenuItem from '../MenuItem'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Order extends Component {
  constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
  }
  
  edit() {
		this.setState({
			editing: true
		})
  }
  
  remove() {
    if (window.confirm('Are you sure you wish to delete this Order?')) {
      this.props.onRemove(this.props.index)
    } else {
      return
    }
  }
  
  // addInstructions() {
    
  // }

	save(e) {
		e.preventDefault()
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			editing: false
		})
	}

	renderForm() {
		return (
      <div className="order" style={this.style}>
        <textarea ref={input => this._newText = input}
                  defaultValue={this.props.children}/>
				<form onSubmit={this.save}>
          {/* <button className="add_instructions" onClick={this.addInstructions} /> */}
          {/* <div className="special_instructions">
            <label>
              Special Instructions:
              
            </label>
          </div> */}
					<button id="save"><FaFloppyO /></button>
				</form>
			</div>
		)
	}

  renderDisplay() {
		return (
			<div className="order">
				<p classname="order_number">Order #{this.props.index}</p>
        <ul classname="menu-items">{this.props.children}</ul>
				<span>
					<button onClick={this.edit} id="edit"><FaPencil /></button>
					<button onClick={this.remove} id="remove"><FaTrash /></button>
				</span>
			</div>
		)
  }
  
	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}

export default Order