import React, { useEffect, useRef, useState } from "react";
import "../css/NavBar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "./MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
type PropType = {
  darkMode: Boolean;
  changeToDarkMode: Function;
};

const NavBar = ({ darkMode, changeToDarkMode }: PropType) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const menu = useRef<HTMLDivElement>(null);
  const [isShowMobileSearch, setIsShowSearchMobile] = useState<Boolean>(false);
  const [width, setWidth] = useState<Number>(window.innerWidth);
  useEffect(() => {
    const listener = (event: any) => {
      if (!menu.current || menu.current.contains(event.target)) {
        return;
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("mousedown", listener);

    return () => {};
  }, [menu]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    if (window.innerWidth >= 1024) {
      setIsShowSearchMobile(false);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <nav
      className={`${
        darkMode ? "dark-mode-nav navbar-container" : "navbar-container"
      }`}
    >
      {!isShowMobileSearch ? (
        <div>
          <MenuIcon className="navbar-icons" />
          <div
            className="youtube-logo hover-pointer bottom-tool-tip"
            tool-tip="หน้าแรกของ YouTube"
          >
            <img
              alt="youtubeLogo"
              src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png"
            />
            <span>YouTube</span>
          </div>
        </div>
      ) : (
        <ArrowBackIcon
          className="navbar-icons"
          onClick={() => {
            if (width < 1024) {
              setIsShowSearchMobile(false);
            }
          }}
        />
      )}
      <div className="search">
        {width >= 1024 || isShowMobileSearch ? (
          <>
            <input placeholder="ค้นหา" className="searchBox" />
            <SearchIcon
              className={`${
                darkMode ? "search-icon dark-mode-search-icon" : "search-icon"
              }`}
            />
          </>
        ) : (
          <SearchIcon
            onClick={() => {
              if (width < 1024) {
                setIsShowSearchMobile(true);
              }
            }}
            className="navbar-icons"
          />
        )}
        <div
          className="bottom-tool-tip l-icons-group"
          tool-tip="ค้นหาด้วยเสียง"
        >
          <MicOutlinedIcon
            className={`${
              darkMode
                ? "navbar-icons circle-icon dark-mode-circle-icon "
                : "navbar-icons circle-icon "
            }`}
          />
        </div>
        {!isShowMobileSearch && (
          <>
            <div className="bottom-tool-tip" tool-tip="สร้าง">
              <VideoCallOutlinedIcon className="navbar-icons " />
            </div>
            <div className="bottom-tool-tip" tool-tip="แอป Youtube">
              <AppsOutlinedIcon className="navbar-icons" />
            </div>
            <div className="bottom-tool-tip" tool-tip="การแจ้งเตือน">
              <NotificationsNoneOutlinedIcon className="navbar-icons" />
            </div>
            <AccountCircleIcon
              className="navbar-icons"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div
                ref={menu}
                className={`${
                  darkMode
                    ? "menu-profile menu-profile-dark-mode"
                    : "menu-profile"
                } `}
              >
                <MenuItem
                  title="ธีมของแอป"
                  darkMode={darkMode}
                  changeToDarkMode={changeToDarkMode}
                ></MenuItem>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
