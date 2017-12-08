import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <li className="headerOptions">
          Hilda Sandberg
        </li>
        <li className="headerOptions">
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li className="headerOptions">
          About
        </li>
        <li className="headerOptions">
          Blabla
        </li>
      </div>
    )
  }

}

export default Header
