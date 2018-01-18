import React from "react"
import Scrollchor from "react-scrollchor"
import { Link } from "react-router-dom"
import "./logo.css"

class Logo extends React.Component {

  render() {
    return (
      <Link to="/">
        {/* <Scrollchor to=""> */}
        <div className="logo">
          {/* <h1>Hilda</h1> */}
        </div>
        {/* </Scrollchor> */}
      </Link>
    )
  }

}

export default Logo
