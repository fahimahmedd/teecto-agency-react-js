import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PhoneIcon from "@mui/icons-material/Phone";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import AOS from "aos";
import "aos/dist/aos.css";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const AppHeader = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="app-header">
        <Container>
          <div
            className="app-header-wrapper"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <a href="#">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </a>
            <div className="nav-list  sm-d-none">
              <ul>
                <li>
                  <a href="#">
                    <ContactSupportIcon /> About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <HandymanIcon /> Service
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PublishedWithChangesIcon /> Work Process
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GroupIcon /> Our Team
                  </a>
                </li>
                <button className="conatct-btn">
                  <PhoneIcon /> Contact
                </button>
              </ul>
            </div>

            <div className="hamburger" onClick={toggleDrawer(true)}>
              <ClearAllIcon />
            </div>
          </div>
        </Container>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="drawe-content">
          <div className="drawer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <a href="#">
                  <ContactSupportIcon /> About
                </a>
              </li>
              <li>
                <a href="#">
                  <HandymanIcon /> Service
                </a>
              </li>
              <li>
                <a href="#">
                  <PublishedWithChangesIcon /> Work Process
                </a>
              </li>
              <li>
                <a href="#">
                  <GroupIcon /> Our Team
                </a>
              </li>
              <button className="conatct-btn">
                <PhoneIcon /> Contact
              </button>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;
