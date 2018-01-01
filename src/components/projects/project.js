import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const projectsJson = require("./../../projects.json")

export default class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foundProject: {
        images: ""
      }
    }
  }

  componentDidMount() {
    const foundProject = projectsJson.projects.find(p => (p.id === this.props.match.params.id))

    this.setState({
      foundProject
    })
  }

  render() {
    return (
      <div className="detailedProject">
        <div className="projectPic" style={{ backgroundImage: `url(${this.state.foundProject.images[0]})` }} />
        <div className="projectInfo">
          <h2 className="name">
            {this.state.foundProject.name}
          </h2>
          <div className="description">
            <h3 className="categories">
              {this.state.foundProject.category}
            </h3>
            {this.state.foundProject.description}
          </div>
          <a href={this.state.foundProject.link}>Visit site </a>
          <Link to="/projects">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }
}
