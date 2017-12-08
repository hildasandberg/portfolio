import React from "react"
import FeatureProject from "./featureProject.js"
import BigHeader from "../BigHeader/BigHeader.js"
import "./style.css"

const projectsJson = require("./../../projects.json")

class Featured extends React.Component {

  render() {
    return (
      <div className="featured">

        <div className="titleHeader">
          <BigHeader className="title" text="Featured Projects" />
        </div>

        {projectsJson.projects.filter(item => item.featured).map((item) => {
          return <FeatureProject
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

export default Featured
