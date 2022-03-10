import React from "react"
import { Link } from "react-router-dom"
import { Badge } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"

const Nav = ({ cartCount }) => {
  return (
    <div>
      <Badge color="secondary" badgeContent={cartCount}>
        <Link to="cart">
          <ShoppingCart color="primary" />
        </Link>
      </Badge>
    </div>
  )
}
export default Nav
