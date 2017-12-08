import React from "react"
import FeatureProject from "../featured/featureProject.js"
import "./style.css"

const projectsJson = require("./../../projects.json")

class Projects extends React.Component {

  render() {
    return (
      <div className="featured">
        {projectsJson.projects.map((item) => {
          return <FeatureProject
            key={item.id}
            pic={item.images[0]}
            name={item.name}
            cat={item.category}
            desc={item.description}
            id={item.id} />
        })}
      </div>
    )
  }

}

export default Projects
