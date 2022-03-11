import React from "react"
import CartItem from "./CartItem"
import Nav from "./Nav"

const Cart = ({
  cartCount,
  cartdata,
  increment = (f) => f,
  incrementcart = (f) => f,
  decrement = (f) => f,
  decrementcart = (f) => f
}) => {
  if (!cartdata) {
    return <Nav cartCount={cartCount} />
  }
  return (
    <div className="cart-page">
      <Nav cartCount={cartCount} />
      {cartdata.map((item, i) => {
        if (item) {
          return (
            <CartItem
              key={i}
              item={item}
              increment={increment}
              incrementcart={incrementcart}
              decrement={decrement}
              decrementcart={decrementcart}
            />
          )
        }
      })}
    </div>
  )
}
export default Cart
