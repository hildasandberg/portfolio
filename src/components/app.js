import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Header from "./header/index.js"
import Hero from "./hero/index.js"
import Projects from "./projects/index.js"
import About from "./about/index.js"
import Featured from "./featured/featured.js"
import "./style.css"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="frontHeader">
            <Header />
          </div>
          <div className="frontHero">
            <Route path="/" component={Hero} />
          </div>
          <Route path="/projects" component={Projects} />
          {/* <Featured /> */}
          {/* <About /> */}
          Find me in src/app.js!

        </div>
      </BrowserRouter>
    )
  }

}

export default App
