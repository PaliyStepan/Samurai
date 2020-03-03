import React from "react";
import classes from './Users.module.scss'
import * as axios from "axios";
import userPhoto from '../../Assets/Images/user-img.png'

class Users extends  React.Component{
    // constructor(props) {
    //     super(props);
    //
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(response => {
    //             this.props.setUsers(response.data.items);
    //         })
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages =[];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            {/*<button onClick={this.getUsers}> GET USERS</button>*/}

            <div className={classes.pagination}>
                {pages.map((p,index) => {
                    return <span
                        className={this.props.currentPage === p && classes.selectedPage}
                        key={index}
                        // onClick={ () => console.log(p)}
                        onClick={(e) => {this.onPageChanged(p)}}
                        >
                        {p}
                    </span>
                })}

            </div>
            {
                this.props.users.map( u => <div key={u.id} className={classes.usersItem}>
                        <span>
                            <div>
                                {/*<img src={u.photoUrl} alt={u.fullName}/>*/}
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={ () => this.props.unfollow(u.id)}> Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
    }
}

export default Users