// it is a test store


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            posts:  [
                {id: 1, message: 'Hi Man', likesCount: 150},
                {id: 2, message: 'Hi Bitch', likesCount: 66},
                {id: 3, message: 'Было круто', likesCount: 216},
                {id: 4, message: 'Зря пошли', likesCount: 22},
            ],
            newPostsText: 'Текст из State'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Kurt'},
                {id: 2, name: 'Виктор'},
                {id: 3, name: 'Александра'},
                {id: 4, name: 'Денис'},
                {id: 5, name: 'Илья'},
                {id: 6, name: 'Жозя'}
            ],
            messages: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'Hi there'},
                {id: 3, message: 'Hi youreself'},
                {id: 4, message: 'lorem dasdas dasd'},
                {id: 5, message: 'Как твои дела?'},
                {id: 6, message: 'Пошли пить пивао'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Stage Changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)

 /*       if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({
                id: 7, message: body
            });

            this._callSubscriber(this._state);
        }

        else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostsText,
                likesCount: 255
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostsText = 'Текст из State';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POS_TEXT) {
            this._state.profilePage.newPostsText = action.newText;
            this._callSubscriber(this._state);
        }
*/

    }
}








export default store;

window.store = store