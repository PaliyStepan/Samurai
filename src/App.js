import React, {Suspense} from 'react';
import './App.scss';
import NavBar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


//const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
//const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component  {
    catchAllUnhandledErrors = (reason, promise) => {
        alert('произошла ошибка сервера. Попробуйте ещё раз.')
    };
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection" , this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection" , this.catchAllUnhandledErrors);
    }
    render(){
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs'
                           render={() =>  <Suspense fallback={Preloader}><DialogsContainer/> </Suspense>}
                    />
                    <Route path='/profile/:userId?'render={withSuspense(ProfileContainer)}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    */}

                    <Switch>
                        {/*<Route exact path='/'*/}
                        {/*       render={() => <ProfileContainer/>}*/}
                        {/*/>*/}
                        <Route exact path='/'
                               render={ ()=> <Redirect to={"/profile"}/>}
                        />

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
                        <Route path='*' render={() => <div> 404</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{ initializeApp })) (App);

const  MainApp = (props) => {
   return <BrowserRouter >
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
};

export default MainApp;