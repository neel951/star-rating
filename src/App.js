import { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating';

function App() {

  function handleClickEvent(){
    console.log("USER CLICKED!");
  }

  function handleBlurEvent(){
    console.log("USER BLURED");
  }
  
  function handleInputEvent(){
    console.log("USER INPUT!");
  }

  function handleFocusEvent(){
    console.log("USER FOCUSED!");
  }

  return (
    <div className="App">
      <StarRating
        mode={"edit"}
        starColor={"yellow"}
        numberOfStars={5}
        initiallySelectedStars={2}
        starMargin={"5px"}
        clickEvent={handleClickEvent}
        blurEvent={handleBlurEvent}
        inputEvent={handleInputEvent}
        focusEvent={handleFocusEvent}
        maxCharLength={15}
      />
    </div>
  );
}

export default App;
