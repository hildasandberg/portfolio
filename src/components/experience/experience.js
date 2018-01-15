import React from "react"
import BigHeader from "../BigHeader/BigHeader.js"
import "./experience.css"

export default class Experience extends React.Component {

  render () {
    return (
      <div className="experience-container">

        <div className="titleHeader">
          <BigHeader className="title" text="Experience" />
        </div>

        <div className="experience-flex">
          <div className="experience exp1">
            <i className="fas fa-code" />
             I can code
          </div>
          <div className="experience exp2">
            <i className="fas fa-code" />
             I can code
          </div>
          <div className="experience exp3">
            <i className="fas fa-code" />
             I can code
          </div>
        </div>
      </div>

    )
  }
}
