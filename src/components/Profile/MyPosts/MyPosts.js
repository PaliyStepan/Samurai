import React from 'react'
import classes from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {


    let postsElements =
        props.posts.map(post => <Post message={post.message} like={post.likesCount} key={post.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () =>{
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // let action = updateNewPostActionCreator(text);
        // props.dispatch(action);
    };

    return(
        <div className={classes.postsBlock}>
            <h3>Мои посты</h3>
            <form>
                <p>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </p>
                <p>
                    <button onClick={onAddPost}>Добавить</button>
                </p>
            </form>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts