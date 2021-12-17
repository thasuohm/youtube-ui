import React, { useState } from "react";
import "../css/NavBar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "./MenuItem";
type PropType = {
  darkMode: Boolean;
  changeToDarkMode: Function;
};

const NavBar = ({ darkMode, changeToDarkMode }: PropType) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "dark-mode-nav navbar-container" : "navbar-container"
      }`}
    >
      <div>
        <MenuIcon className="navbar-icons" />
        <div className="youtube-logo">
          <img
            alt="youtubeLogo"
            src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png"
          />
          <span>YouTube</span>
        </div>
      </div>

      <div className="search">
        <input placeholder="ค้นหา" className="searchBox" />
        <SearchIcon
          className={`${
            darkMode ? "search-icon dark-mode-search-icon" : "search-icon"
          }`}
        />
        <MicOutlinedIcon
          className={`${
            darkMode
              ? "navbar-icons circle-icon dark-mode-circle-icon"
              : "navbar-icons circle-icon"
          }`}
        />
      </div>

      <div>
        <VideoCallOutlinedIcon className="navbar-icons" />
        <AppsOutlinedIcon className="navbar-icons" />
        <NotificationsNoneOutlinedIcon className="navbar-icons" />
        <AccountCircleIcon
          className="navbar-icons"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div
            className={`${
              darkMode ? "menu-profile menu-profile-dark-mode" : "menu-profile"
            } `}
          >
            <MenuItem
              title="ธีมของแอป"
              darkMode={darkMode}
              changeToDarkMode={changeToDarkMode}
            ></MenuItem>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
