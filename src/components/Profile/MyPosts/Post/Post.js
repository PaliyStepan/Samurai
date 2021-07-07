import React from 'react'
import classes from './Post.module.scss'
import likeIcon from "../../../../Assets/Images/like.svg";
const Post = (props) => {
    return(
        <div className={classes.post}>
            <h2 className={classes.postText}>
                {props.message}
            </h2>
            <div className={classes.post__likes}>
                <div className={classes.post__like}>
                    <img src={likeIcon} alt=""/>
                   <span>{props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default Post
