import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";



function Header() {
  return (
    <div className="header">      
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>
        <img className="header_logo" src="tinder-logo.jpg" alt="tinder-logo"></img>

        <ForumIcon fontSize="large" className="header_icon"/>

    </div>
  )
}

export default Header