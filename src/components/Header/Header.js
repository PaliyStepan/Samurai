import React from 'react';
import classes from'./Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from "../../Assets/Images/react.svg";

const Header = ({isAuth,login,logout,profile}) => {
    return(
        <header className={classes.header}>
            <NavLink to="/profile" className={classes.logo}>
                <img src={logo} alt="Logo"/>
            </NavLink>


            <div className={classes.loginBlock}>

                {isAuth
                        ?  <div className={classes.loginBlock__row}><img src="" alt="33"/>      <div className={classes.loginBlock__name}>{login}</div>  <button onClick={logout} className={classes.loginBtn}>Logout</button>  </div>
                        : <div className={classes.loginBlock__row}><NavLink to={'/login'} className={classes.loginBtn}>Login</NavLink> </div>
                }
            </div>
        </header>
    )
}

export default Header
