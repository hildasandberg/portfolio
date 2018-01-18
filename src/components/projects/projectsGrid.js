import React from "react"
import projectsJson from "projects.js"
import ProjectForGrid from "../featured/projectForGrid.js"
import "./projects.css"

class ProjectsGrid extends React.Component {

  render() {
    return (
      <div className="projects-container-wide">
        <div className="projects-container">

          <div className="projects-ingress">
            <div className="projects-header">
              <h4>Here are some of my projects within</h4>
              <h1>{this.props.filterVariable}</h1>
            </div>
            <div className="projects-info">
              <div className="projects-info-text">
                {this.props.filterVariable === "Web Development" &&
                  <p>
                    Here is a selection of web development projects.
                    Some are built using only Html and Css but the majority are
                    built using JavaScript and React.
                    I'm currently in the Technigo 12 week Bootcamp in Web
                    development. During the course I have made 6 larger projects
                     in group and almost one assignment every day.
                     You can find my projects at GitHub or in my portfolio
                     hildasandberg.com. During the course we have written code
                     in HTML, CSS, JavaScript and React, and also some backend
                     with non relational servers (Node.js).
                  </p>
                }
                {this.props.filterVariable === "Industrial Design Engineering" &&
                  <p>
                    Here is a selection of industrial design engineering projects.
                     I am an industrial design engineer with extensive knowledge
                     in design methodology and product development. I work in an
                     engaged and iterative manner because I am a strong believer
                     of continuous improvement. I am interested in user
                     interaction and I always think about usability and keeping
                     customer focus when developing services and products.
                     I also have a keen interest in leadership and agile product
                     development. I have experience in independent planning and
                     project management both from professional assignments and
                     from my education. I have also strengthened my project
                     management skills through courses in Project Management and
                     Scrum.
                  </p>
                }
              </div>
            </div>

          </div>
          <div className="projectsGrid">
            {projectsJson.projects.filter(item => item.category === this.props.filterVariable).map((item) => {
              return <ProjectForGrid
                handleProjectClick={this.props.handleProjectClick}
                filterVariable={this.props.filterVariable}
                filterVariableClass={this.props.filterVariableClass}
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
      </div>
    )
  }

}

export default ProjectsGrid
