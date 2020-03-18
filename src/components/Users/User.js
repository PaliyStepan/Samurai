import React from "react";
import classes from './Users.module.scss'
import userPhoto from "../../Assets/Images/user-img.png";
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress,unfollow,follow}) => {

    return (
        <div className={classes.usersItem}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {unfollow(user.id)}}
                            > Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)}}
                            >Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <h3>{user.name}</h3>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    );
};


export default User;