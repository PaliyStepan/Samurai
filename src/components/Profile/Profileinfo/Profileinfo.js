import React from "react";
import classes from './Profileinfo.module.scss'

const Profileinfo = () => {
    return(
        <div className={classes.profileinfo}>
            <img src="https://www.tokkoro.com/picsup/1049836-creature.jpg" alt=""/>
            <h1> Меня зовут Жозя</h1>
        </div>
    )
}

export default Profileinfo