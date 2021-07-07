import React, {useState} from "react";
import classes from './Paginator.module.scss';
import cn from "classnames";
import arrowIMG from "../../../Assets/Images/arrow.svg";


let Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage,portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount /pageSize);

    let pages =[];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1 ) * portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;



    return (
            <div className={classes.pagination}>
                { portionNumber > 1 &&
                <button onClick={ ()=> { setPortionNumber(portionNumber - 1)}} className={ cn (
                    classes.pagination__btn,  classes.pagination__btn_prev
                )}><img src={arrowIMG} alt="arrow"/></button> }

                <div className={classes.pagination__items}>{
                    pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                            return <span className={cn({
                                [classes.selectedPage]: currentPage === p
                            }, classes.pageNumber)}
                                         key={p}
                                         onClick={(e) => {
                                             onPageChanged(p)
                                         }}>
                            {p}
                        </span>
                        }
                        )
                    }
                </div>


                { portionCount > portionNumber &&
                <button onClick={ ()=> { setPortionNumber(portionNumber + 1)}} className={ cn (
                    classes.pagination__btn,  classes.pagination__btn_next
                )}> <img src={arrowIMG} alt="arrow"/> </button> }


            </div>
    )
};


export default Paginator;