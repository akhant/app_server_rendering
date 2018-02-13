

import React from 'react'

const PicItem = (props) => {
  
  return (
    <div className="item" onClick={() => {
      console.log(props)
      props.selectPic(props.pic,props.link)
    }
    } style={{ backgroundImage: `url(${props.pic}?auto=compress,format&fit=crop&w=300&h=250&q=80)`}}>
          
      </div>
  )
}
export default PicItem