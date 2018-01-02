import React from "react"
import "./style.css"

export default class ProjectForGrid extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="gridProject">

        <div className="gridProjectPic" style={{ backgroundImage: `url(${this.props.pic})` }}>
          <div className="gridProjectInfo">
            <h2 className="name">
              {this.props.name}
            </h2>

            {/* <div className="description">
              <h3 className="categories">
                {this.props.cat}
              </h3> */}
              {/* {this.props.desc} */}

              <a href={`/projects/${this.props.id}`}>
                Read More
              </a>

            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}
