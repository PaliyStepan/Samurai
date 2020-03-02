import React from "react";
import classes from './../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={classes.dialogItem}>
            <NavLink
                // to={`/dialogs/${props.id}`}
                to={path}
            >
                {props.name}
            </NavLink>
        </div>
    )
}



export default Dialogitem