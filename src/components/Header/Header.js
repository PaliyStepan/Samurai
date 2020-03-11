import React from 'react'
import  classes from'./Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={classes.header}> 
            <img src='https://data.whicdn.com/images/122567715/original.png' alt="Logo"/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth
                        ?  <div> {props.login} - <button onClick={props.logout}>Logout</button>  </div>
                        : <NavLink to={'/login'}>LOGIN </NavLink>
                }
            </div>
        </header>
    )
}

export default Header
