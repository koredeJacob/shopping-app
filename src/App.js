import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Main from "./components/Main"
import Cart from "./components/Cart"

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key))
const App = () => {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("count"))
  )
  const [data, setData] = useState(loadJSON("data"))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [code, setCode] = useState()
  const [cartItems, setCartItems] = useState({})

  const codesArray = []

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
  const details = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: { lang: "en", productcode: code, country: "us" },
    headers: {
      "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      "x-rapidapi-key": "df2227c79amsh68944f60b411911p12d41cjsn7a2fe035d991"
    }
  }

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(cartCount))
  }, [cartCount])

  useEffect(() => {
    if (data) {
      return
    }
    setLoading(true)
    axios
      .request(options)
      .then((res) => localStorage.setItem("data", JSON.stringify(res.data)))
      .then(() => setData(JSON.parse(localStorage.getItem("data"))))
      .then(() => setLoading(false))
      .catch((error) => setError(error))
  }, [])

  useEffect(() => {
    if (!code) {
      return
    }
    axios
      .request(details)
      .then((res) => {
        res.data.product
      })
      .then((res) => {
        res.name, res.description, res.whiteprice.price
      })
      .then((res) => setCartItems())
  }, [code])
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
            cartData={(code) => {
              if (codesArray.includes(code)) {
                return
              }
              setCode(code)
            }}
          />
        }
      />
      <Route path="/cart" element={<Cart cartCount={cartCount} />} />
    </Routes>
  )
}
export default App
