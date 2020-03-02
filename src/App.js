import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={ () => <DialogsContainer
                                                            // store={props.store}
                                                            />}
                    />
                    <Route path='/profile' render={ () => <Profile
                                                            // store={props.store}
                                                          />}
                    />
                    <Route path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
    );
}


export default App;
