import React from 'react';
import { useState } from 'react';
import Star from './Star';
import './MultipleStars.css';

const MultipleStars = (props) => {

    const [rating, setRating] = useState(-1+props.initiallySelectedStars);

    return (
        <div className="multiStars">
            <h1>GIVE US RATING!</h1>
            {
                [...Array(props.numberOfStars)].map((ele, i) => {
                    return (
                        <Star 
                        mode={props.mode}
                        index={i} 
                        setRating={setRating} 
                        rating={rating} 
                        starColor={props.starColor} 
                        starMargin={props.starMargin}
                        clickEvent={props.clickEvent}
                        />
                    );
                })
            }
        </div>
    )
}

export default MultipleStars;