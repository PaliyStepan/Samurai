import {connect} from "react-redux";
import {
    follow,
    // setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    unfollow, toggleFollowingProgress, getUsers
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getUsersState,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../Redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends  React.Component{

    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    };


    render() {

        return <>
            {
                this.props.isFetching ? <Preloader /> : null
            }
            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// };


let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
};














// let withRedirect = withAuthRedirect(UsersContainer);



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        // setUsers,
        setCurrentPage,
        // setTotalUsersCount,
        // toggleIsFetching,
        toggleFollowingProgress,
        getUsers: getUsers
    })
) (UsersContainer)




// export default withAuthRedirect (connect(mapStateToProps, {
//         follow,
//         unfollow,
//         // setUsers,
//         setCurrentPage,
//         // setTotalUsersCount,
//         // toggleIsFetching,
//         toggleFollowingProgress,
//         getUsers: getUsers
//     }
//     ) (UsersContainer))

// export default connect(mapStateToProps, {
//         follow,
//         unfollow,
//         // setUsers,
//         setCurrentPage,
//         // setTotalUsersCount,
//         // toggleIsFetching,
//         toggleFollowingProgress,
//         getUsers: getUsers
//     }
//     ) (UsersContainer)





// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(sesUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAc(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//
//     }
// };


// export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)