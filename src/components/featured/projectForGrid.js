import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class ProjectForGrid extends React.Component {

handleClick = () => {
  console.log("you clicked on a project")
  this.props.handleProjectClick()
}

render() {
  console.log(this.props)
  return (
    <div className={`gridProject ${this.props.filterVariableClass}`}>
      <div className="gridProjectPic" style={{ backgroundImage: `url(${this.props.pic})` }}>
        <Link to={`/projects/${this.props.id}`} onClick={this.handleClick}>
          <div className="gridProjectInfo">
            <h2 className="name">
              {this.props.name}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
}
