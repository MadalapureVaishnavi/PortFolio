import React from 'react'
import './FloatingDiv.css'
function FloatingDiv({image,txt1,txt2}) {
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} alt=''/>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
      </div>
    </div>
  )
}

export default FloatingDiv
