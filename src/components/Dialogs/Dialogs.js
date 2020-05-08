import React from "react";
import classes from './Dialogs.module.scss'
import Dialogitem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FromControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialogitem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {dialogsElements}

            </div>
            <div className={classes.messageItems}>

                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your Message"
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);


export default Dialogs
