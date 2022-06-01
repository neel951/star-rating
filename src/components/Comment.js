import React from 'react';
import { useState } from 'react';
import './Comment.css';

const Comment = (props) => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleSetComments = (event) => {

        event.preventDefault();

        if(props.mode!=="edit") return;

        setComments([
            ...comments,
            comment.toUpperCase()
        ]);
        setComment("")
    }

    return (
        <div className="detailBox">
            <h1>GIVE US YOUR VIEWS!</h1>
            <div className="titleBox">
                <label>Comment Box</label>
            </div>
            <div className="actionBox">
                <ul className="commentList">
                    {
                        comments.map((ele, i) => {
                            return (
                                <li key={i}>
                                    <div className="commenterImage">
                                        <img src="http://placekitten.com/50/50" alt='user'/>
                                    </div>
                                    <div className="commentText">
                                        <p className="">{ele}</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
                <form type="submit">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Your comments" value={comment} maxLength={props.maxCharLength}
                            onFocus={(e)=>{
                                e.preventDefault()
                                if(props.mode==="edit"){
                                    e.target.style.backgroundColor="yellow"
                                    props.focusEvent()
                                }
                            }}
                            onBlur={(e)=>{
                                if(props.mode==="edit"){
                                    e.target.value=e.target.value.toUpperCase()
                                    e.target.style.backgroundColor="white"
                                    props.blurEvent()
                                }
                            }}
                            onChange={(e) => {
                                if(props.mode==="edit"){
                                    setComment(e.target.value)
                                    props.inputEvent();
                                }
                            }} />
                    </div>
                    <div className="form-group">
                        <button className="bt" onClick={handleSetComments}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comment;