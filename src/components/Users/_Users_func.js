import React from "react";
import classes from './Users.module.scss'
import * as axios from "axios";
import userPhoto from '../../Assets/Images/user-img.png'

let _Users_func = (props) => {
    let getUsers = () =>
    {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);

                })
        }
    };
    return (
        <div>
            <button onClick={getUsers}> GET USERS</button>
            {
                props.users.map( u => <div key={u.id} className={classes.usersItem}>
                        <span>
                            <div>
                                {/*<img src={u.photoUrl} alt={u.fullName}/>*/}
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={ () => props.unfollow(u.id)}> Unfollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <h3>{u.name}</h3>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
};

export default _Users_func