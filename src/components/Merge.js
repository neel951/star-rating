import React from 'react'
import Comment from './Comment'
import MultipleStars from './MultipleStars'

const Merge = (props) => {
  return (
    <div>
        <MultipleStars
        mode={props.mode}
        numberOfStars={props.numberOfStars} 
        starColor={props.starColor}
        initiallySelectedStars={props.initiallySelectedStars}
        starMargin={props.starMargin}
        clickEvent={props.clickEvent}
        />
        <Comment
        mode={props.mode}
        blurEvent={props.blurEvent}
        inputEvent={props.inputEvent}
        focusEvent={props.focusEvent}
        maxCharLength={props.maxCharLength}
        />
    </div>
  )
}

export default Merge;