import React, {useEffect, useState} from "react";
import classes from "./Profileinfo.module.scss"

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    //   let editMode = stateWithSetState[0];
    //  let setEditMode = stateWithSetState[1];
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activatedMode = () => {
        setEditMode(true);
    };

    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const  onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };





    return (
        <div className={classes.profileStatus}>

                    {/*{ !editMode &&*/}
                    {/*<div className={classes.profileStatus__get}>*/}
                    {/*    <span onClick={activatedMode} className={classes.profileStatus__current}>*/}
                    {/*       {props.status || <span className={classes.statusEmpty}>изменить статус </span>}*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                    {/*}*/}
                    {/*{editMode &&*/}
                    {/*<div className={classes.profileStatus__set}>*/}
                    {/*    <input autoFocus={true} onBlur={deactivatedEditMode} onChange={onStatusChange}*/}
                    {/*          value={status} onKeyPress={(event)=> {if(event.key === 'Enter'){*/}
                    {/*                deactivatedEditMode()*/}
                    {/*            }}}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*} */}

                    {/*САМ СДЕЛАЛ, убрать потом*/}

            {
                props.isOwner
                    ?
                        !editMode
                        ? <div className={classes.profileStatus__get}>
                        <span onClick={activatedMode} className={classes.profileStatus__current}>
                           {props.status || <span className={classes.statusEmpty}>изменить статус </span>}
                        </span>
                            </div>
                        : <div className={classes.profileStatus__set}>
                                <input autoFocus={true} onBlur={deactivatedEditMode} onChange={onStatusChange}
                                       value={status} onKeyPress={(event)=> {if(event.key === 'Enter'){
                                    deactivatedEditMode()
                                }}}
                                />
                            </div>
                    : props.status || <span className={classes.statusEmpty}>нет статуса </span>

            }


            {/*{ !editMode &&*/}
            {/*<div className={classes.profileStatus__get}>*/}
            {/*            <span onClick={activatedMode} className={classes.profileStatus__current}>*/}
            {/*               {props.status || <span className={classes.statusEmpty}>изменить статус </span>}*/}
            {/*            </span>*/}
            {/*</div>*/}
            {/*}*/}
            {/*{editMode &&*/}
            {/*<div className={classes.profileStatus__set}>*/}
            {/*    <input autoFocus={true} onBlur={deactivatedEditMode} onChange={onStatusChange}*/}
            {/*           value={status} onKeyPress={(event)=> {if(event.key === 'Enter'){*/}
            {/*        deactivatedEditMode()*/}
            {/*    }}}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*}*/}




        </div>
    )
};

export default ProfileStatusWithHooks
