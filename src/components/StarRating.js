import React from 'react';
import PropTypes from 'prop-types';
import Merge from './Merge'

const StarRating = (props) => {

  function clickEvent(){

    const {clickEvent}=props;

    (props.mode==="edit") && clickEvent && clickEvent();
  }

  function blurEvent(){

    const {blurEvent}=props;
    
    (props.mode==="edit") && blurEvent && blurEvent();
  }
  
  function inputEvent(){

    const {inputEvent}=props;
    
    (props.mode==="edit") && inputEvent && inputEvent();
  }

  function focusEvent(){

    const {focusEvent}=props;

    (props.mode==="edit") && focusEvent && focusEvent();
  }

  return (
    <Merge
    mode={props.mode}
    starColor={props.starColor}
    numberOfStars={props.numberOfStars}
    initiallySelectedStars={props.initiallySelectedStars}
    starMargin={props.starMargin}
    clickEvent={clickEvent}
    blurEvent={blurEvent}
    inputEvent={inputEvent}
    focusEvent={focusEvent}
    maxCharLength={props.maxCharLength}
    />
  );
}

StarRating.propTypes={
  mode:PropTypes.string.isRequired,
  starColor:PropTypes.string.isRequired,
  numberOfStars:PropTypes.number.isRequired,
  initiallySelectedStars:PropTypes.number.isRequired,
  starMargin:PropTypes.string,
  maxCharLength:PropTypes.number,
  clickEvent:PropTypes.func,
  focusEvent:PropTypes.func,
  blurEvent:PropTypes.func,
  inputEvent:PropTypes.func,
}

export default StarRating