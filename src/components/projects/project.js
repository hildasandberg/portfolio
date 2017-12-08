import React from "react"
import "./style.css"

const projectsJson = require("./../../projects.json")

export default class Project extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      foundProject: {}
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
          <div className="projectPic" style={{backgroundImage:`url(${this.state.foundProject.images})` }}>
          </div>

          <div className="projectInfo">
            <h2 className="name">
              {this.state.foundProject.name}
              {/* {this.props.name}*/}
            </h2>

            <div className="description">
              <h3 className="categories">
                {/* {this.props.cat} */}
                {this.state.foundProject.category}
              </h3>
              {/* {this.props.desc} */}
              {this.state.foundProject.description}
            </div>
          </div>
        </div>
    )
  }
}
