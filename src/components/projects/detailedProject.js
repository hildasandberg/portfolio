import React from "react"
import { Link } from "react-router-dom"
import projectsJson from "projects"
import Gallery from "./gallery.js"
import "./projects.css"

export default class Project extends React.Component {

  constructor(props) {
    super(props)

    const foundProject = projectsJson.projects.find(p => (p.id === this.props.match.params.id))

    this.state = {
      foundProject
    }
  }

  handleClick = () => {
    this.props.handleProjectClick()
  }

  render() {
    return (
      <div className="detailedProject-container-wide">
        <div className="detailedProject">

          <div className="projectPic">
            <Gallery gallImgAll={this.state.foundProject.images} />
          </div>
          <div className="projectInfo">

            <h2 className="name">
              {this.state.foundProject.name}
            </h2>
            <h4 className="categories">
              {this.state.foundProject.category}
              {this.state.foundProject.technologies.map((tech) => {
                return (
                  <h4 className="technoglogies">{tech}</h4>
                )
              })}
            </h4>

            <div className="description">
              {this.state.foundProject.description}
            </div>

            <div className="projectLinks">
              <h4>
                <a href={this.state.foundProject.link}>Visit site</a>
                <Link to="/" onClick={this.handleClick}>
                  Go Back to page
                </Link>
              </h4>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  // width: React.PropTypes.number,
  // height: React.PropTypes.number
}
