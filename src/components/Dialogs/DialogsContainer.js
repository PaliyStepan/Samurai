import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//
//     // let state = props.store.getState().dialogsPage;
//     //
//     // let onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageCreator());
//     // }
//     //
//     // let onNewMessageChange = (body) => {
//     //    props.store.dispatch(updateNewMessageBodyCreator(body));
//     // }
//
//     return <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState().dialogsPage;
//
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     };
//
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBodyCreator(body));
//                     };
//
//                     return <Dialogs updateNewMessageBody={onNewMessageChange}
//                              sendMessage={onSendMessageClick}
//                              dialogsPage={state}
//                     />
//                 }
//         }
//         </StoreContext.Consumer>
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // },
    }
};




/*let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);*/

// export default DialogsContainer
export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
//    c низу вверх
) (Dialogs);

