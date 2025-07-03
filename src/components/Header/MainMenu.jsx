// components/Menu/MainMenu.jsx
import React, { useState } from "react";
import "./menu.css";
import TopSection from "./TopSection";

const MainMenu = () => {
  const [globalLanguage, setGlobalLanguage] = useState("en");
  console.log(globalLanguage);
  return (
    <div className="header">
      <div className="top-ctr">
        <TopSection setGlobalLanguage={setGlobalLanguage}/>
      </div>
      <div className="nav-ctr">
        <nav className="menu-container">
          <ul className="menu-list">
            <li className="menu-item">Home</li>
            <li className="menu-item">About</li>

            <li className="menu-item has-submenu">Services</li>

            <li className="menu-item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainMenu;
