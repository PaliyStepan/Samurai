const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:  [
        {id: 1, message: 'Hi Man', likesCount: 150},
        {id: 2, message: 'Hi Bitch', likesCount: 66},
        {id: 3, message: 'Было круто', likesCount: 216},
        {id: 4, message: 'Зря пошли', likesCount: 22},
    ],
    newPostText: 'Текст из State'
}




const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 255
            };
            return {
                ...state,
                posts: [...state.posts,newPost ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state
    }
};







export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostActionCreator = (text) =>  {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};



export default profileReducer;