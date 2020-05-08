import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {getUserProfile} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps,{logout,getUserProfile}),
    withRouter,
)(HeaderContainer);
