// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};


const dialogsReducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:7, message: body}]
            };
        default:
            return state
    }
};


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default dialogsReducer;
