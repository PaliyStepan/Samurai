import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {getUserProfile} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {
    componentDidMount() {
        //this.props.getUserProfile(6253);
    }
    componentDidUpdate() {

    }
    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

//export default connect(mapStateToProps, { logout,getUserProfile }) (HeaderContainer);


export default compose(
    connect(mapStateToProps,{logout,getUserProfile}),
    withRouter,
)(HeaderContainer);
