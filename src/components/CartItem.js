import React from "react"

const CartItem = ({
  item,
  increment = (f) => f,
  incrementcart = (f) => f,
  decrement = (f) => f,
  decrementcart = (f) => f
}) => {
  return (
    <div className="cart-itemcontainer">
      <div className="cart-itemimage">
        <img src={item.images[0].url} alt="cartitem" />
      </div>
      <div className="cart-iteminfo">
        <h5 className="itembrandname">{item.brandName}</h5>
        <p className="itemname">{item.name}</p>
        <p className="itemprice">
          <strong>price:</strong> {`$${item.value}`}
        </p>
        <p className="itemtotal">
          <strong>total:</strong> {`$${item.count * item.value}`}
        </p>

        <button
          className="removebutton"
          onClick={() => {
            decrement()
            decrementcart(item.id)
          }}>
          -
        </button>
        <span className="itemcount">{item.count}</span>
        <button
          className="addbutton"
          onClick={() => {
            increment()
            incrementcart(item.id)
          }}>
          +
        </button>
      </div>
    </div>
  )
}
export default CartItem
