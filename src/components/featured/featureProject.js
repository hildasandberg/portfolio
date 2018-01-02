import React from "react"
import "./style.css"

export default class FeatureProject extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="oneProject">

        <div className="projectPic" style={{ backgroundImage: `url(${this.props.pic})` }} />
        <div className="projectInfo">
          <h2 className="name">
            {this.props.name}
          </h2>

          <div className="description">
            <h3 className="categories">
              {this.props.cat}
            </h3>
            {this.props.desc}

            <a href={`/projects/${this.props.id}`}>
              Read More HEJHEJ
            </a>

          </div>
        </div>
      </div>
    )
  }
}
