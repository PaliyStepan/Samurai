import React from 'react';
import './App.scss';
import NavBar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {compose} from "redux";


class App extends React.Component  {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render()
    {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}
                    />
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}



export default compose(
    withRouter,
    connect(null,{ getAuthUserData })) (App);
