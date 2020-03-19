import React from "react";
import classes from './Profileinfo.module.scss'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user-img.png";
const Profileinfo = ({profile,status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return(
        <div className={classes.profileinfo}>
            <img src={profile.photos.large || userPhoto } alt="" className={classes.mainPhoto}/>
            <div>
                <h1> Меня зовут {profile.fullName} </h1>
                <h2> Мой ID = {profile.userId}</h2>
                <div>
                    <small>Мой статус</small>
                    {
                        profile.aboutMe ? <div> {profile.aboutMe} </div> : null
                    }

                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
};

export default Profileinfo