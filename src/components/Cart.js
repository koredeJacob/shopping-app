import React from "react"
import Nav from "./Nav"

const Cart = ({ cartCount }) => {
  return (
    <div>
      <Nav cartCount={cartCount} />
    </div>
  )
}
export default Cart
