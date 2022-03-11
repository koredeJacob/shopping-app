import React from "react"
import Nav from "./Nav"
import { Content } from "./Content"

const Main = ({
  cartCount,
  loading,
  error,
  data,
  increment = (f) => f,
  cartitem = (f) => f
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
    <div className="home-page">
      <Nav cartCount={cartCount} />
      <Content items={data} increment={increment} cartitem={cartitem} />
    </div>
  )
}

export default Main
