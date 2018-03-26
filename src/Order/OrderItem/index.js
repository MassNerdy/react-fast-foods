import React from 'react'

const OrderItem = ({
  item_name,
  qty,
  price,
}) => (
  <li className="order-item">
    <span className="item-name">{item_name}</span>
    <span className="item-qty">{qty}</span>
    <span className="item-sub-total">{"$" + (price * qty)}</span>
  </li>
);

export default OrderItem