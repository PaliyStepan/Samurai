import Users from "./Users";
import {connect} from "react-redux";
import {followAC, sesUsersAC, unfollowAC} from "../../Redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(sesUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users)