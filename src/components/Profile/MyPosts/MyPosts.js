import React from 'react'
import classes from './MyPosts.module.scss'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={Textarea} name="newPostText" placeholder="Enter your Message"
                     validate={[required, maxLength10 ]}
              />
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


const MyPosts = React.memo(props => {
    // console.log("sdas")

    let postsElements =
        props.posts.map(post => <Post message={post.message} like={post.likesCount} key={post.id}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };


    return (
        <div className={classes.postsBlock}>
            <h3>Мои посты</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});


export default MyPosts