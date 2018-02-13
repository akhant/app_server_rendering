import React, { Component } from 'react'

export class PreciewModal extends Component {
  render() {
    const {selectedPic, isOpen, close } = this.props
    const previewLink = `${selectedPic.pic}?fit=crop&w=1920&h=1080`
    const downloadLink = `https://unsplash.com${selectedPic.link.replace('/?photo=', '/photos/')}/download?force=true`

    const modalClass = isOpen ? 'show' : ''
    return (
      <div className={`preview-modal ${modalClass}`} >
        <span onClick={close} className="close-icon">&times;</span>
        <div className="preview-modal-inner" style={{backgroundImage: `url(${previewLink})`}}  >
          <a className="btn download-btn" href={downloadLink}>Download</a>
        </div>
      </div>
    )
  }
}

export default PreciewModal
