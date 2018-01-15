import React from "react"
// import { Link } from "react-router-dom"
import Scrollchor from "react-scrollchor"
import "./hero.css"

class Hero extends React.Component {

  render() {
    return (
      <div className="hero2">

        <div className="hilda2">
          <Scrollchor to="#about">
            {/* <Link to="/about"> */}
            <h1> Hilda Sandberg </h1>
            {/* </Link> */}
          </Scrollchor>
        </div>

        <Scrollchor to="#web-development">
          {/* <Link to="/web-development"> */}
          <h2>Web Developer</h2>
          {/* </Link> */}
        </Scrollchor>

        <Scrollchor to="#industrial-design">
          {/* <Link to="/industrial-design"> */}
          <h2>Industrial Design Engineer</h2>
          {/* </Link> */}
        </Scrollchor>

      </div>
    )
  }

}

export default Hero
