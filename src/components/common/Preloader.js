import React from "react";
import preloader from "../../images/Users/preloader.gif";

const Preloader = (props) => {
    return (
        <img style={{height: 150, width: 150}} src={preloader} alt='preloader'/>
    )
}

export default Preloader