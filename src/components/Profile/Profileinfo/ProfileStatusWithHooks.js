import React, {useEffect, useState} from "react";
// import classes from "./Profileinfo.module.scss"

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
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activatedMode}>
                    {props.status || "----- " }
                </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivatedEditMode} onChange={onStatusChange}
                      value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks
