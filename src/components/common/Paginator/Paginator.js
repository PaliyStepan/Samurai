import React from "react";
import classes from './Paginator.module.scss'


let Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount /pageSize);

    let pages =[];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div className={classes.pagination}>
                {pages.map((p, index) => {
                    return <span
                        className={currentPage === p && classes.selectedPage}
                        key={index}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                    >
                            {p}
                        </span>
                })}

            </div>
    )
};


export default Paginator;