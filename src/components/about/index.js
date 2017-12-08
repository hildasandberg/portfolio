import React from "react"
import "./style.css"

class About extends React.Component {

  render() {
    return (
      <div className="about">
        <div className="left">
          <div className="text">
            <h2>HEJ!</h2>
            <p>
              I am an industrial design engineer with extensive knowledge in design methodology
               and product development.
              I work in an engaged and iterative manner because I am a strong believer
              of continuous improvement. Some of my strengths are keeping customers in
              focus and usability in mind. I’m interested in user interaction and user
              experience and I always think about usability when developing services and products.
              I also have a great interest in project leadership and agile product
              development such as Scrum. I am self-taught in VBA-programming to be able to
              create project-follow up and forecasting tools and easy to use spreadsheets.
            </p>
            <p>
              <h3>Skills</h3>
                Product development, Project management, Industrial design, Service design,
                User interactions, Prototyping, Construction, Visualization, Agile, Scrum,
                Customer experience, Ideation, Project Planning
              <p>
                Microsoft Excel, Microsoft Office, SolidEdge, Rhinoceros, 3D Studio Max,
                KeyShot, InDesign, Photoshop, Illustrator, MATLAB, Modela Player,
                CES EduPack, VBA, html
              </p>
            </p>
          </div>
        </div>
        <div className="hilda">
          <h1> Hilda Sandberg </h1>
        </div>
      </div>
    )
  }

}

export default About
