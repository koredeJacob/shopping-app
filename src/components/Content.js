import React from "react"

export const Content = ({
  items,
  increment = (f) => f,
  cartData = (f) => f
}) => {
  return (
    <div className="items">
      {items.results.map((item, i) => (
        <Item key={i} item={item} increment={increment} cartData={cartData} />
      ))}
    </div>
  )
}
export const Item = ({ item, increment = (f) => f, cartData = (f) => f }) => {
  const {
    defaultArticle: { code }
  } = item

  const cartdata = {}
  return (
    <div className="item">
      <img src={item.images[0].url} alt="product image" />
      <h5>{item.name}</h5>
      <p>{item.price.value}</p>
      <button
        onClick={() => {
          cartData(code)
          increment()
        }}>
        ADD TO CART
      </button>
    </div>
  )
}
