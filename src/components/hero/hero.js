import React from "react"
import Scrollchor from "react-scrollchor"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div className="hero2">
        <div className="hilda2">
          <Scrollchor to="#about">
            <h1> Hilda Sandberg </h1>
          </Scrollchor>
        </div>

        <Scrollchor to="#web-development">
          <h4>Web Developer</h4>
        </Scrollchor>

        <Scrollchor to="#industrial-design">
          <h4>Industrial Design Engineer</h4>
        </Scrollchor>

        <Scrollchor to="#intro">
          <i className="fas fa-arrow-circle-down" />
        </Scrollchor>
      </div>
    )
  }
}

export default Hero
