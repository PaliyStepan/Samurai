import React from "react";
import preloader from "../../../Assets/Images/loading.gif"
import "./Preloader.sass"

let Preloader = (props) => {
    return <div className="Preloader"><img src={preloader} alt="preloader" /> </div>
};

export default Preloader;
