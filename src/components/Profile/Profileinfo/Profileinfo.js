import React, {useState} from "react";
import classes from './Profileinfo.module.scss'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user-img.png";
import changeIcon from "../../../Assets/Images/change.svg";
import ProfileDataForm from "./ProfildeDataForm";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


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

    // потом убрать
    let devider =  <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>;

    return(
        <React.Fragment>
        <div className={classes.profileInfo}>
            <div className={classes.avaBlock}>
                 <img src={profile.photos.large || userPhoto } alt="" className={classes.avaBlock__img}/>
                {isOwner &&
                <div className={classes.avaBlock__panel}>
                    <label className={classes.avaBlock__label}>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                        <img src={changeIcon} alt="icon" className={classes.changeAva}/>
                    </label>
                </div>}
            </div>
            <div className={classes.profileInfo__data}>
                {
                    editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData devider={devider}
                                   profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/> }

            </div>
        </div>
            {
                isOwner && <MyPostsContainer/>
            }
        </React.Fragment>
    )
};


const ProfileData = ({profile, isOwner, goToEditMode,devider}) => {
    return  (
        <div className={classes.profileInfo__get}>
            <h1> {profile.fullName}</h1>
            {devider}
            <div className={classes.profileInfo__row}>
                <span>My ID:</span>   <b>{profile.userId}  </b>
            </div>

            <div className={classes.profileInfo__row}>
                <span>My skills:</span>   <b>{profile.lookingForAJobDescription}  </b>
            </div>
            <div className={classes.profileInfo__row}>
                <span>About Me</span>  <b>{profile.aboutMe }  </b>
            </div>
            <div className={classes.profileInfo__contacts}>
                <b>Contacts</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })
                }
            </div>
            { isOwner &&  <button onClick={goToEditMode} className={classes.mainBtn}>Edit</button>}
        </div>
    )
};


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.profileInfo__row}> <b> {contactTitle}: </b> <a href={contactValue}>{contactValue}</a> </div>
};

export default ProfileInfo
