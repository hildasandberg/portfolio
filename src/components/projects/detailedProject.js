import React from "react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
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
            <h4 className="category">{this.state.foundProject.category}</h4>
            <div className="technologies">
              {this.state.foundProject.technologies.map((tech) => {
                return (
                  <h4> {tech}</h4>
                )
              })}
            </div>

            <p className="description">
              <ReactMarkdown source={this.state.foundProject.description} />
            </p>

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
