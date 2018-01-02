import React from "react"
import ProjectForGrid from "../featured/projectForGrid.js"
import BigHeader from "../BigHeader/BigHeader.js"
import "./style.css"

const projectsJson = require("./../../projects.json")

class ProjectsGrid extends React.Component {

  render() {
    return (
      <div className="featuredProjects">

        <div className="titleHeader">
          <BigHeader className="title" text="Projects" />
        </div>
        <div className="projectsGrid">
          {projectsJson.projects.map((item) => {
            return <ProjectForGrid
              key={item.id}
              pic={item.images[0]}
              name={item.name}
              cat={item.category}
              desc={item.description}
              link={item.link}
              id={item.id} />
          })}
        </div>
      </div>
    )
  }

}

export default ProjectsGrid
