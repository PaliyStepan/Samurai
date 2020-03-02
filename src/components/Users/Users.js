import React from "react";
import classes from './Users.module.scss'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg',
                    followed: false ,fullName: 'Dmitry', status: 'I`m a boss', location: {city: 'Moscow', country: "Russia"} },
                {id: 2, photoUrl: 'https://pic.rutube.ru/video/19/7c/197c4d75ba2fa8891ba329066fa62a36.png',
                    followed: true, fullName: 'Sasha', status: 'I`m a boss', location: {city: 'Kiev', country: "Ukraine"} },
                {id: 3, photoUrl: 'https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2019/06/Cover_610-1.jpg',
                    followed: false, fullName: 'Evgen', status: 'I`m a boss', location: {city: 'Detroit ', country: "USA"} },
                {id: 4, photoUrl: 'http://infit.ru/uploads/images/Alex/untitled%20folder/untitled%20folder/untitled%20folder/Denis_1%D0%B4%D0%B8%D0%B5%D1%82%D0%B0.jpg',
                    followed: true ,fullName: 'Denis', status: 'I`m a boss', location: {city: 'Minsk', country: "Belarus"} }
            ]
        );
    }
    return (
        <div>
            {
                props.users.map( u => <div key={u.id} className={classes.usersItem}>
                        <span>
                            <div>
                                <img src={u.photoUrl} alt={u.fullName}/>
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
                                <h3>{u.fullName}</h3>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
};

export default Users