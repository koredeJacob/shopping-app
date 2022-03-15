import React from "react"
import CartItem from "./CartItem"
import Nav from "./Nav"
import "./styles/cart.css"

/* page for cart items
displays the items added to cart
*/
//cart
const Cart = ({
  cartCount,
  cartdata,
  total,
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
      {/*map over items in cartdata and return cartitem component for non empty values*/}
      <div className="cart-itemcontainer">
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
      <div className="checkout">
        <p className="total">{`TO PAY: $${total.toFixed(2)}`}</p>
        <div className="buttoncontainer">
          <button className="checkoutbutton">CHECK OUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
