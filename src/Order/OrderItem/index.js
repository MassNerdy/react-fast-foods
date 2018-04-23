import React from 'react'

const OrderItem = ({
  item_name,
  qty,
  price,
  subtotal,
}) => (
  <div className="order_item">
    <span className="item_name">{item_name}</span>
    <span className="dotted_spacer" />
    <span className="item_qty">Qty {qty}</span>
    <span className="item_sub_total">${subtotal}</span>
  </div>
);

export default OrderItem