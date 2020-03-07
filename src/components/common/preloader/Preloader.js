import React from "react";
import preloader from "../../../Assets/Images/loading.gif"


let Preloader = (props) => {
    return <div className="preloader"><img src={preloader} alt="preloader" /> </div>
}

export default Preloader;