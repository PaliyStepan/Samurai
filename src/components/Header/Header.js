import React from 'react'
import  classes from'./Header.module.scss'

const Header = () => {
    return(
        <header className={classes.header}> 
            <img src='https://data.whicdn.com/images/122567715/original.png' alt="Logo"/>
        </header>
    )
}

export default Header
