import React, { useContext } from "react";
import "./toogle.css"
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../Context";


const Toggle =()=>{
    const theme = useContext(ThemeContext)
    const handleClick = () =>{
        theme.dispatch({type:"TOGGLE"})
    }


    return(
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick}></div>
        </div>
    )
}

export default Toggle;