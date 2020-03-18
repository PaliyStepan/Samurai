import React from "react";
import classes from './Profileinfo.module.scss'
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = ({profile,status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return(
        <div className={classes.profileinfo}>
            <img src={profile.photos.large} alt=""/>
            <div>
                <h1> Меня зовут {profile.fullName} </h1>
                <h2> Мой ID = {profile.userId}</h2>
                {/*<div>*/}
                {/*    <small>Мой статус</small>*/}
                {/*    {*/}
                {/*        props.profile.aboutMe ? <div> {props.profile.aboutMe} </div> : null*/}
                {/*    }*/}

                {/*</div>*/}
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
};

export default Profileinfo