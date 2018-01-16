import React from "react"
import { Link } from "react-router-dom"
import Gallery from "./gallery.js"
import "./projects.css"

const projectsJson = require("./../../projects.json")

export default class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      foundProject: {
        images: []
      }
    }
  }

  componentDidMount() {
    const foundProject = projectsJson.projects.find(p => (p.id === this.props.match.params.id))
    this.setState({
      foundProject
    }, () => {
      console.log(this.state.foundProject.images[0])
      console.log(this.state.foundProject.images[1])
      console.log(this.state.foundProject.images[2])
    })
  }

  handleClick = () => {
    this.props.handleProjectClick()
  }

  render() {
    return (
      <div className="detailedProject">

        <div className="projectPic">
          {/* <div className="projectPic" style={{ backgroundImage: `url(${this.state.foundProject.images[0]})` }} /> */}
          <Gallery
            gallImg1={this.state.foundProject.images[0]}
            gallImg2={this.state.foundProject.images[1]}
            gallImg3={this.state.foundProject.images[2]}
            gallImgAll={this.state.foundProject.images}
          />
        </div>
        <div className="projectInfo">

          <h2 className="name">
            {this.state.foundProject.name}
          </h2>
          <h4 className="categories">
            {this.state.foundProject.category}
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
    )
  }
}

Project.propTypes = {
  // width: React.PropTypes.number,
  // height: React.PropTypes.number
}
