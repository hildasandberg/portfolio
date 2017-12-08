import React from "react"
import "./style.css"
import Project from "./project.js"

const projectsJson = require("./../../projects.json")

class Projects extends React.Component {

    render() {
      return (
        <div className="project">
          {projectsJson.projects.map((item) => {
            return <Project
              pic={item.images[0]}
              name={item.name}
              cat={item.category}
            desc={item.description}/>
          })}
        </div>
      )
    }

  }

export default Projects
