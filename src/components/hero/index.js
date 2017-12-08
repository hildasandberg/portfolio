import React from "react"
import "./style.css"

class Hero extends React.Component {

  render() {
    return (
      <div className="hero">
        <div className="left">
          <div className="web">
            <h2>Web Developer</h2>
          </div>
          <div className="ide">
            <h2>Industrial Design Engineer</h2>
          </div>
        </div>
        <div className="hilda">
          <h1> Hilda Sandberg </h1>
        </div>
      </div>
    )
  }

}

export default Hero
