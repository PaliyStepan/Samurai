import React from 'react'
import classes from './MyPosts.module.scss'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromControls/FormsControls";

const MyPosts = (props) => {


    let postsElements =
        props.posts.map(post => <Post message={post.message} like={post.likesCount} key={post.id}/>)

    // let newPostElement = React.createRef();

    // let onAddPost = () =>{
    //     props.addPost();
    //     // props.dispatch(addPostActionCreator());
    // };

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text)
    //     // let action = updateNewPostActionCreator(text);
    //     // props.dispatch(action);
    // };

    let onAddPost = (values) =>{
        props.addPost(values.newPostText)
    };


    return(
        <div className={classes.postsBlock}>
            <h3>Мои посты</h3>
            {/*<form>*/}
            {/*    <p>*/}
            {/*        <Field component="textarea" name="newPostMessage" placeholder="Enter your Message"/>*/}
            {/*        /!*<textarea*!/*/}
            {/*        /!*    ref={newPostElement}*!/*/}
            {/*        /!*    value={props.newPostText}*!/*/}
            {/*        /!*    onChange={onPostChange}*!/*/}
            {/*        */}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <button onClick={onAddPost}>Добавить</button>*/}
            {/*    </p>*/}
            {/*</form>*/}
            <AddPostFormRedux onSubmit={ onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={Textarea} name="newPostText" placeholder="Enter your Message"
                     validate={[required, maxLength10 ]}
              />
              {/*<textarea*/}
              {/*    ref={newPostElement}*/}
              {/*    value={props.newPostText}*/}
              {/*    onChange={onPostChange}*/}
              {/*/>*/}
          </div>
          <div>
              <button>Добавить</button>
          </div>
      </form>
  )
};

const AddPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);


export default MyPosts