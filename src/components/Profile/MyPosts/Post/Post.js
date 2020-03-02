import React from 'react'
import classes from './Post.module.scss'

const Post = (props) => {
   
  
    return(
        <div className={classes.post}>
            <img
                src="https://paulkingart.com/wp-content/uploads/2019/07/Kurt-Cobain-1993_PWK.jpg"
                alt=""
            />
            <h2>
                {props.message}
            </h2>
            <span>
                У ВАС &nbsp;
                {props.like}  &nbsp;
                лайков
            </span>
        </div> 
    )
}

export default Post