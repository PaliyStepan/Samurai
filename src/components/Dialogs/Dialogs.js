import React from "react";
import classes from './Dialogs.module.scss'
import Dialogitem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialogitem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>)
    let newMessageBody = state.newMessageBody;



    let onSendMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
        props.updateNewMessageBody(body);

       // props.store.dispatch(updateNewMessageBodyCreator(body));

    };

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {dialogsElements}

            </div>
            <div className={classes.messageItems}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder="Enter your Message"
                            onChange={onNewMessageChange}
                        >

                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs