import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import "./index.css"

render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
)
