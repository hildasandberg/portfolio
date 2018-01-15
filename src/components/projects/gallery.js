import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

class Gallery extends React.Component {

  render() {
    
    const images = [
      {
        original: this.props.gallImg1,
        thumbnail: this.props.gallImg1
      },
      {
        original: this.props.gallImg2,
        thumbnail: this.props.gallImg2
      },
      {
        original: this.props.gallImg3,
        thumbnail: this.props.gallImg3
      }
    ]

    return (
      <ImageGallery items={images} />
    )
  }

}

export default Gallery
