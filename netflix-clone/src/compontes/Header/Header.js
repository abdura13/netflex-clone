import React from "react";
import Netflix from "../../assetes/images/logo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./header.css";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src={Netflix} alt="Netflix logo" width="100"/></li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Browse by Languges</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <SearchIcon />
            <NotificationsActiveIcon />
            <AccountBoxIcon />
            <ArrowDropDownIcon />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
