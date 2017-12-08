import React from "react"
import "./style.css"

class BigHeader extends React.Component {

  render() {
    return (
      <div className={`BigHeader ${this.props.className}`}>
        {this.props.text}
      </div>
    )
  }

}

export default BigHeader
