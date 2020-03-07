import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

// import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if  (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);

        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // usersAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {


        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter (ProfileContainer);

export default connect(mapStateToProps,{getUserProfile}) (WithUrlDataContainerComponent);