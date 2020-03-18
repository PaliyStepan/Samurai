import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//
//     // let state = props.fake_store.getState().dialogsPage;
//     //
//     // let onSendMessageClick = () => {
//     //     props.fake_store.dispatch(sendMessageCreator());
//     // }
//     //
//     // let onNewMessageChange = (body) => {
//     //    props.fake_store.dispatch(updateNewMessageBodyCreator(body));
//     // }
//
//     return <StoreContext.Consumer>
//             {
//                 (fake_store) => {
//
//                     let state = fake_store.getState().dialogsPage;
//
//                     let onSendMessageClick = () => {
//                         fake_store.dispatch(sendMessageCreator());
//                     };
//
//                     let onNewMessageChange = (body) => {
//                         fake_store.dispatch(updateNewMessageBodyCreator(body));
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

