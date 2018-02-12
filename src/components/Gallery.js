import React, { Component } from 'react'
import PicItem from './PicItem'
import Data from '../UnsplashData'

export class Gallery extends Component {
  state={
    paginator: 1,
    itemsPerPage: 8
  }

  loadMore = () => {
    this.setState({
      paginator: this.state.paginator + 1
    })
  }
  
  render() {
    const {paginator, itemsPerPage} = this.state
    return (
      <div>
        <h1>Gallery</h1>
        <div className="container" >
            {Data.slice(0, paginator * itemsPerPage ).map((item) => {
              return <PicItem key={item.link} {...item} />
            }
            )}
        </div>
        <div className="btn_wrapper">
          <a onClick={this.loadMore} href="#more" className="btn load-more">Load more...</a>
        </div>
      </div>
    )
  }
}

export default Gallery
