import React from "react"
import BigHeader from "../BigHeader/BigHeader.js"
import "./intro.css"

export default class Intro extends React.Component {

  render () {
    return (
      <div className="intro-container">

        <h1 className="intro-header">Welcome to my portfolio</h1>
        {/* <div className="titleHeader">
          <BigHeader className="title" text="Welcome to my portfolio" />
        </div> */}

        <div className="intro-text">
          <p>Hello and welcome to my portfolio!</p>
          <p>I've built this portfolio using React, to show of my projects I have made during my Bootcamp at technigo but also other projects.
          This portfolio is under construction!</p>
          <p>Please have a look at my projects!</p>

        </div>
      </div>

    )
  }
}
