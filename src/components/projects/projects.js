import React from "react"
import FeatureProject from "../featured/featureProject.js"
import BigHeader from "../BigHeader/BigHeader.js"
import "./style.css"

const projectsJson = require("./../../projects.json")

class Projects extends React.Component {

  render() {
    return (
      <div className="featuredProjects">

        <div className="titleHeader">
          <BigHeader className="title" text="Projects" />
        </div>
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
      </div>
    )
  }

}

export default Projects
