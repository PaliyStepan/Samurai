import React from "react";
import classes from './Users.module.scss'
import userPhoto from "../../Assets/Images/user-img.png";
import {NavLink} from "react-router-dom";

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
                                    <NavLink to={'/profile/'+ u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>{
                                                props.unfollow(u.id)
                                                // props.toggleFollowingProgress(true, u.id);
                                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                                //                                                 //     withCredentials: true,
                                                //                                                 //     headers:  {
                                                //                                                 //         "API-KEY": "642a3f6d-fe34-48fd-b2cd-37283583ad4a"
                                                //                                                 //     }
                                                //                                                 // })



                                            }}

                                            > Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>  {
                                                props.follow(u.id)
                                                // props.toggleFollowingProgress(true, u.id);
                                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                                //     withCredentials: true,
                                                //     headers:  {
                                                //         "API-KEY": "642a3f6d-fe34-48fd-b2cd-37283583ad4a"
                                                //     }
                                                // })

                                                // props.toggleFollowingProgress(true, u.id);
                                                // usersAPI.follow(u.id)
                                                //     .then(response => {
                                                //         if (response.data.resultCode === 0 ){
                                                //             props.follow(u.id);
                                                //         }
                                                //         props.toggleFollowingProgress(false, u.id);
                                                //     });
                                            }}


                                            >Follow</button>
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