import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) =>  {



    // let state = props.fake_store.getState();


    // let addPost = () =>{
    //     props.fake_store.dispatch(addPostActionCreator());
    // }
    //
    // let onPostChange = (text) => {
    //     let action = updateNewPostActionCreator(text);
    //     props.fake_store.dispatch(action);
    // }

  /*  return(
        <StoreContext.Consumer>
            {
                (fake_store) => {

                    let state = fake_store.getState();

                    let addPost = () =>{
                        fake_store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text);
                        fake_store.dispatch(action);
                    };

                   return <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             // posts={state.getState().profilePage.posts}
                             // newPostText={state.getState().profilePage.newPostText}
                             newPostText={state.profilePage.newPostText}
                    />
                }
        }
        </StoreContext.Consumer>
    )*/
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = updateNewPostActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer