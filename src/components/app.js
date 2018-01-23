import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Animated } from "react-animated-css"
import Scrollchor from "react-scrollchor"
// import Scrollchor from "react-scrollchor"
// import Logo from "./logo/logo.js"
import Hero2 from "./hero/hero2.js"
import Project from "./projects/detailedProject.js"
import About from "./about/about.js"
// import Experience from "./experience/experience.js"
import ProjectsGrid from "./projects/projectsGrid.js"
import Footer from "./footer/footer.js"
import Intro from "./intro/intro.js"
import Devider from "./devider/devider.js"
import "./style.css"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projectVisible: false
    }
  }

  handleProjectClick = () => {
    console.log("you clicked on a project, this is the app component")
    this.setState({
      projectVisible: !this.state.projectVisible
    }, () => {
      console.log(this.state.projectVisible)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Logo /> */}

          <Animated animationIn="zoomIn" isVisible={`${!this.state.projectVisible}`}>
            <div id="top">
              <Route exact path="/" component={Hero2} />
            </div>
            <div id="intro">
              <Route exact path="/" component={Intro} />
            </div>
            <Route exact path="/" component={Devider} />
          </Animated>

          <div id="web-project">
            <Route
              path="/projects/:id"
              render={routeProps =>
                <Animated className="app-project-page" animationIn="zoomIn" isVisible={`${this.state.projectVisible}`}>
                  <Project
                    {...routeProps}
                    handleProjectClick={this.handleProjectClick} />
                </Animated>
              } />
          </div>

          <Animated animationIn="zoomIn" isVisible={`${!this.state.projectVisible}`}>

            <div id="web-development">
              <Route
                exact
                path="/"
                render={routeProps =>
                  <ProjectsGrid
                    {...routeProps}
                    handleProjectClick={this.handleProjectClick}
                    filterVariable="Web Development"
                    filterVariableClass="web" />
                } />
            </div>

            <Route exact path="/" component={Devider} />

            {/* <Route path="/" component={Experience} /> */}

            {/* <Route exact path="/" component={Devider} /> */}

            <div id="industrial-design">
              <Route
                exact
                path="/"
                render={routeProps =>
                  <ProjectsGrid
                    {...routeProps}
                    handleProjectClick={this.handleProjectClick}
                    filterVariable="Industrial Design Engineering"
                    filterVariableClass="i-d-e" />
                } />
            </div>

            <Route exact path="/" component={Devider} />

            <div id="about">
              <Route exact path="/" component={About} />
            </div>
            
            <Route exact path="/" render={()=>
              <Scrollchor to="#top">
                <div className="up-arrow">
                  <i className="fas fa-arrow-circle-up" />
                </div>
              </Scrollchor>} />
            <Route exact path="/" component={Footer} />

          </Animated>

        </div>
      </BrowserRouter>
    )
  }

}

export default App
