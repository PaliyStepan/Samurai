import React from "react";
import classes from './Profileinfo.module.scss'
import {createField, Input, Textarea} from "../../common/FromControls/FormsControls"
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  (
        <form onSubmit={handleSubmit} className={classes.profileForm}>
            <div className={classes.profileForm__row}>   <b>  Full name</b> {createField("Full name", "fullName", [], Input)} </div>

            <div className={classes.profileForm__row}>
                <b>My skills:</b>
                {createField ("My skills", "lookingForAJobDescription",[], Textarea )}
            </div>
            <div className={classes.profileForm__row}>
                <b>About me:</b>
                {createField ("About me", "aboutMe",[], Input )}
            </div>
            <div className={classes.profileForm__row}>
                <b>Contacts</b>
                <div className={classes.profileForm__rowInner}>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={classes.profileForm__row}>
                            <b>{key}</b>
                                {createField(key, "contacts." + key, [], Input)}
                        </div>
                    })
                }
                </div>
            </div>

            { error && <div className={classes.formSummaryError}> {error}</div>
            }
           <button className={classes.mainBtn}>Save</button>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm);

export default ProfileDataFormReduxForm;
