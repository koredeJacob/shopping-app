import React from "react"
import "./styles/content.css"

export const Content = ({
  items,
  increment = (f) => f,
  cartitem = (f) => f
}) => {
  return (
    <div className="products">
      {items.results.map((item, i) => (
        <Item
          key={i}
          id={i}
          item={item}
          increment={increment}
          cartitem={cartitem}
        />
      ))}
    </div>
  )
}

export const Item = ({
  id,
  item,
  increment = (f) => f,
  cartitem = (f) => f
}) => {
  const {
    name,
    price: { value },
    images,
    brandName
  } = item

  const itemdata = {
    name,
    value,
    images,
    brandName,
    id
  }

  return (
    <div className="product">
      <div className="product-container">
        <img src={item.images[0].url} alt="product" className="productimage" />
        <h5 className="productname">{item.name}</h5>
        <p className="productprice">{`$${item.price.value}`}</p>
        <button
          className="addtocart"
          onClick={() => {
            increment()
            cartitem(itemdata)
          }}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
