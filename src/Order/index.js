import React from 'react'
import ItemList from './ItemList'

function Order(props) {
  return (
    <div className="order">
      <ItemList />
      <div className="order_total">
        Order Total
      </div>
      <div className="order_actions">
        OrderActions
      </div>
    </div>
  )
} 

export default Order