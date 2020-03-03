import React from "react";
import classes from './Users.module.scss'
import userPhoto from "../../Assets/Images/user-img.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages =[];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div className={classes.pagination}>
                {pages.map((p, index) => {
                    return <span
                        className={props.currentPage === p && classes.selectedPage}
                        key={index}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                    >
                            {p}
                        </span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id} className={classes.usersItem}>
                            <span>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={() => props.unfollow(u.id)}> Unfollow</button>
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


export default Users;