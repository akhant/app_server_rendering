import React, { Component } from 'react'

export class PreciewModal extends Component {
  render() {
    const {selectedPic, isOpen, close } = this.props
    
    const modalClass = isOpen ? 'show' : ''
    return (
      <div className={`preview-modal ${modalClass}`} >
        <span onClick={close} className="close-icon">&times;</span>
        <div className="preview-modal-inner" style={{backgroundImage: `url(${selectedPic.pic})`}}  >
          <a className="btn download-btn" href="#">Download</a>
        </div>
      </div>
    )
  }
}

export default PreciewModal
