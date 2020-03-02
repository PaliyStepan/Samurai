import React from 'react'
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer
                // store={props.store}


                // posts={props.profilePage.posts}
                // newPostText={props.profilePage.newPostsText}
                // dispatch={props.dispatch}

                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )


}

export default Profile