import React from "react";
import {FaKeyboard} from "react-icons/fa6";
import {FaUserCircle} from "react-icons/fa";



const Header = () =>{




    return(
        <div className="header">
            <h1>TypeCat</h1>
            <br/>
            <img src={FaKeyboard} alt="key"/>
            <br/>
            <img src={FaUserCircle} alt="user"/>
        </div>
    )
}

export default Header;
