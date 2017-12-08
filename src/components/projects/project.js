import React from "react"
import "./style.css"

export default class Project extends React.Component {

  render() {
    return (
        <div className="detailedProject">

          <div className="projectPic" style={{backgroundImage:`url(${this.props.pic})` }}>
          </div>

          <div className="projectInfo">
            <h1 className="name">
              {this.props.name}
            </h1>

            <div className="description">
              <h1 className="categories">
                {this.props.cat}
              </h1>
              {this.props.desc}
            </div>
          </div>
        </div>
    )
  }
}
