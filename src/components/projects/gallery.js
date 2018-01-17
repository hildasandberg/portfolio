import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import "./projects.css"

class Gallery extends React.Component {

  render() {
    let images = []
    images = this.props.gallImgAll.map((image) => {
      return {
        original: image,
        thumbnail: image
      }
    })

    return (
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showThumbnails={false} />
    )
  }

}

export default Gallery
