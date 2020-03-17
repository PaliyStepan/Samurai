import React from "react";
import classes from './Profileinfo.module.scss'
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return(
        <div className={classes.profileinfo}>
            <img src={props.profile.photos.large} alt=""/>
            <div>
                <h1> Меня зовут {props.profile.fullName} </h1>
                <h2> Мой ID = {props.profile.userId}</h2>
                {/*<div>*/}
                {/*    <small>Мой статус</small>*/}
                {/*    {*/}
                {/*        props.profile.aboutMe ? <div> {props.profile.aboutMe} </div> : null*/}
                {/*    }*/}

                {/*</div>*/}
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
};

export default Profileinfo