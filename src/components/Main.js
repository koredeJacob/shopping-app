import React from "react"
import Nav from "./Nav"
import { Content } from "./Content"

const Main = ({
  cartCount,
  loading,
  error,
  data,
  increment = (f) => f,
  cartData = (f) => f
}) => {
  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>error loading page,try again!</p>
  }
  if (!data) {
    return null
  }
  return (
    <div>
      <Nav cartCount={cartCount} />
      <Content items={data} increment={increment} cartData={cartData} />
    </div>
  )
}

export default Main
