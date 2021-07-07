import React from 'react'
import classes from './MyPosts.module.scss'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromControls/FormsControls";


const maxLength100 = maxLengthCreator(100);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={classes.postsForm}>
          <Field component={Textarea} name="newPostText" placeholder="Enter your Message"
                 validate={[required, maxLength100 ]}
          />

          <button className={classes.mainBtn}>Add</button>
      </form>
  )
};

const AddPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);


const MyPosts = React.memo(props => {

    let postsElements =
        props.posts.map((post, index) => <Post message={post.message} like={post.likesCount} key={index}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };


    return (
        <div className={classes.postsBlock}>
            <div className={classes.postBlock}>
                <h3>Мои посты</h3>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});


export default MyPosts
