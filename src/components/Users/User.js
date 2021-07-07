import React from "react";
import classes from './Users.module.scss'
import userPhoto from "../../Assets/Images/user-img.png";
import {NavLink} from "react-router-dom";
import cn from "classnames";

let User = ({user,followingInProgress,unfollow,follow}) => {

    return (
        <div className={classes.usersItem}>
            <div className={classes.usersItem__info}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                    <h3>{user.name}</h3>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {unfollow(user.id)}} className={cn(classes.follow__btn, classes.follow__btn_reverse)}
                            > Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)}} className={classes.follow__btn}
                            >Follow</button>
                    }
            </div>
        </div>
    );
};


export default User;
