import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts:  [
        {id: 1, message: 'Hi Man', likesCount: 150},
        {id: 2, message: 'Hi Bitch', likesCount: 66},
        {id: 3, message: 'Было круто', likesCount: 216},
        {id: 4, message: 'Зря пошли', likesCount: 22},
    ],
    // newPostText: 'Текст из State',
    profile: null,
    status: ""
}




const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 255
            };
            return {
                ...state,
                posts: [...state.posts,newPost ],
                newPostText: ''
            };
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state
    }
};







export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

export const setUserProfile = (profile) =>  {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};



export const getUserProfile = (userId) =>  async (dispatch) => {
    // usersAPI.getProfile(userId)
    //     .then(response => {
    //         dispatch(setUserProfile(response.data));
    //     });

    let response = await usersAPI.getProfile(userId);
       dispatch(setUserProfile(response.data));
};


export const setStatus = (status) =>  {
    return {
        type: SET_STATUS,
        status
    }
};

export const getStatus = (userId) => async (dispatch) =>  {
    // profileAPI.getStatus(userId)
    //     .then(response => {
    //         dispatch(setStatus(response.data));
    //     });

    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
};


export const updateStatus = (status) => async (dispatch) =>  {
    // profileAPI.updateStatus(status)
    //     .then(response => {
    //         if (response.data.resultCode ===0 ) {
    //             dispatch(setStatus(status));
    //         }
    //     });

    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0 ) {
        dispatch(setStatus(status));
    }
};





// export const updateNewPostActionCreator = (text) =>  {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
//     }
// };



export default profileReducer;