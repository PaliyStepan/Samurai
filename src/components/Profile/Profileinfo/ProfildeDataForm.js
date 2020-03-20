import React from "react";
import classes from './Profileinfo.module.scss'
import {createField, Input, Textarea} from "../../common/FromControls/FormsControls"
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  (
        <form onSubmit={handleSubmit}>
            <div> Full name {createField("Full name", "fullName", [], Input)} </div>
            <div>
                <b>Looking fora a job:</b>
                {createField ("", "lookingForAJob",[], Input,{type:"checkbox"} )}
            </div>

            <div>
                <b>My skills:</b>
                {createField ("My skills", "lookingForAJobDescription",[], Textarea )}
            </div>
            <div>
                <b>About me:</b>
                {createField ("About me", "aboutMe",[], Input )}
            </div>
            <div>
                <b>Contacts</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}</b>
                                {createField(key, "contacts." + key, [], Input)}
                        </div>
                    })
                }
            </div>

            { error && <div className={classes.formSummaryError}> {error}</div>
            }
           <button>Save</button>

        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm);

export default ProfileDataFormReduxForm;
