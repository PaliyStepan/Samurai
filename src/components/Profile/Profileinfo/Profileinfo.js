import React, {useState} from "react";
import classes from './Profileinfo.module.scss'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user-img.png";
import ProfileDataForm from "./ProfildeDataForm";
const ProfileInfo = ({profile,status, updateStatus,isOwner,savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length ) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then (
            ()=> {
                setEditMode(false);
            }
        );

    };

    return(
        <div className={classes.profileinfo}>
            <img src={profile.photos.large || userPhoto } alt="" className={classes.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/> }

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return  (
        <div>
            <h1> Full name {profile.fullName} </h1>
            <h2> Мой ID = {profile.userId}</h2>
            <div>
                <b>Looking fora a job:</b>  {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>My skills:</b>  {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About Me</b> {profile.aboutMe }
            </div>
            <div className={classes.contacts}>
                <b>Contacts</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
            { isOwner && <div> <button onClick={goToEditMode} className={['one' +' '+ 'two']}>Edit</button></div>}

        </div>
    )
};






const Contact = ({contactTitle, contactValue}) => {
    return <div> <b> {contactTitle}: </b> <a href={contactValue}>{contactValue}</a> </div>
};

export default ProfileInfo