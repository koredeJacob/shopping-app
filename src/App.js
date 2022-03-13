import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Main from "./components/Main"
import Cart from "./components/Cart"

const loadJSON = (key) => key && JSON.parse(sessionStorage.getItem(key))

{
  /* App component renders the home and cart page
makes API call on first render and stores the data in session storage for faster loader time
 */
}

const App = () => {
  const [cartCount, setCartCount] = useState(loadJSON("count"))
  const [data, setData] = useState(loadJSON("data"))
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState()
  const [cartarray, setcartarray] = useState(new Array(30))
  const [cartdata, setcartdata] = useState(loadJSON("cart"))
  const [total, settotal] = useState(0)

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",

    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "30"
    },
    headers: {
      "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
    }
  }

  useEffect(() => {
    sessionStorage.setItem("count", JSON.stringify(cartCount))
  }, [cartCount])

  useEffect(() => {
    if (data) {
      return
    }

    setLoading(true)
    axios
      .request(options)
      .then((res) => sessionStorage.setItem("data", JSON.stringify(res.data)))
      .then(() => setData(JSON.parse(sessionStorage.getItem("data"))))
      .then(() => setLoading(false))
      .catch((error) => seterror(error))
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            loading={loading}
            data={data}
            error={error}
            cartCount={cartCount}
            increment={() => setCartCount(cartCount + 1)}
            cartitem={(itemdata) => {
              cartarray[itemdata["id"]] = cartarray[itemdata["id"]] || {
                ...itemdata,
                count: 0
              }

              cartarray[itemdata.id].count++
              setcartarray(cartarray)
              settotal(total + cartarray[itemdata.id].value)
              sessionStorage.setItem("cart", JSON.stringify(cartarray))
              setcartdata(JSON.parse(sessionStorage.getItem("cart")))
            }}
          />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cartCount={cartCount}
            cartdata={cartdata}
            increment={() => setCartCount(cartCount + 1)}
            incrementcart={(id) => {
              cartarray[id].count++
              setcartarray(cartarray)
              settotal(total + cartarray[id].value)
              sessionStorage.setItem("cart", JSON.stringify(cartarray))
              setcartdata(JSON.parse(sessionStorage.getItem("cart")))
            }}
            decrement={() => setCartCount(cartCount - 1)}
            decrementcart={(id) => {
              if (cartarray[id].count) {
                settotal(Math.abs(total - cartarray[id].value))
              }

              cartarray[id].count--
              if (!cartarray[id].count) {
                cartarray[id] = null
              }

              setcartarray(cartarray)
              sessionStorage.setItem("cart", JSON.stringify(cartarray))
              setcartdata(JSON.parse(sessionStorage.getItem("cart")))
            }}
            total={total}
          />
        }
      />
    </Routes>
  )
}

export default App
