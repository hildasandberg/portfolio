import React from "react"
import "./footer.css"

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/hilda-sandberg-b0638243/"><i className="fab fa-linkedin-in" /></a>
        <a href="https://github.com/hildasandberg/"><i className="fab fa-github" /></a>
        <a href="https://www.pinterest.se/hfyra/"><i className="fab fa-pinterest-p" /></a>
      </div>
    )
  }
}
