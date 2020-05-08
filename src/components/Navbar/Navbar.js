import React, {useEffect, useState} from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom';
import cn from "classnames";


const NavBar = () => {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            const isTop = window.scrollY > 108;

            if (window.innerWidth > 991) {
                if (isTop) {
                    setIsScroll(true)
                } else {
                    setIsScroll(false)
                }
            }
        })
    }, []);

    const wrapClasses = cn(classes.nav__list,{
        [classes.navIsFixed] : isScroll
    });

    return(
        <nav className={classes.nav}>
        <ul className={wrapClasses}>
          <li className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>
              Messages
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}>
              Users
            </NavLink>
          </li>
        </ul>
        <div className={classes.note}>
            <h3>Для входа используйте эти данные</h3>
            <p><b>Login:</b> <span>testmyskill@mail.ru</span></p>
            <p><b>Password:</b> <span>test2019</span></p>
        </div>
      </nav>
    )
};

export default NavBar
