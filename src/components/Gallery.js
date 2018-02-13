import React, { Component } from 'react'
import PicItem from './PicItem'
import Data from '../UnsplashData'
import PreviewModal from './PreviewModal'

export class Gallery extends Component {
  state={
    paginator: 1,
    itemsPerPage: 8,
    modalIsOpen: false,
    selectedPicture: {
      pic: '',
      link: ''
    }
  }

  loadMore = () => {
    this.setState({
      paginator: this.state.paginator + 1
    })
  }

  openPreviewModal = (pic,link) => {
    this.setState({
      modalIsOpen: true,
      selectedPicture: {
        pic: pic, link: link
      }
    })
  }
  closePreviewModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedPicture: {
        pic: '', link: ''
      }
    })
  }
  
  
  
  render() {
    const {paginator, itemsPerPage, modalIsOpen, selectedPicture} = this.state
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: 80, fontSize: 50}}>Gallery</h1>
        <div className="container" >
            {Data.slice(0, paginator * itemsPerPage ).map((item) => {
              return <PicItem selectPic={this.openPreviewModal} key={item.link} {...item} />
            }
            )}
        </div>
        <div className="btn_wrapper">
          <a onClick={this.loadMore} href="#more" className="btn load-more">Load more...</a>
        </div>
        <PreviewModal selectedPic={selectedPicture} isOpen={modalIsOpen} close={this.closePreviewModal} />
      </div>
    )
  }
}

export default Gallery
