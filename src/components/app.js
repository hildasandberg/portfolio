import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./header/index.js"
import Hero from "./hero/index.js"
import Projects from "./projects/projects.js"
import Project from "./projects/detailedProject.js"
import About from "./about/index.js"
import Featured from "./featured/featured.js"
import ProjectsGrid from "./projects/projectsGrid.js"
import "./style.css"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Hero} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
          <Route exact path="/" component={ProjectsGrid} />
          <Route exact path="/" component={Featured} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
