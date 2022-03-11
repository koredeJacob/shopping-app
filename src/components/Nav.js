import React from "react"
import { Link } from "react-router-dom"
import { Badge } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"

const Nav = ({ cartCount }) => {
  return (
    <div className="navbar">
      <h2 className="shop-name">shoppr</h2>
      <div className="shopping-icon">
        <Badge color="secondary" badgeContent={cartCount}>
          <Link to="cart">
            <ShoppingCart color="primary" />
          </Link>
        </Badge>
      </div>
    </div>
  )
}
export default Nav
