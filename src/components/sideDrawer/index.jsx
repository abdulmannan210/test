/* eslint-disable react/prop-types */

import { Box, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../assets/images/header-logo.png";

import { useStyles } from "./styles";
import { links } from "../../data/header-links";

const SideDrawer = ({ open, drawerToggle }) => {
  const classes = useStyles();

  let drawerClass = [classes.sideDrawer];

  if (open) {
    drawerClass = [classes.sideDrawer, classes.open];
  }

  return (
    <Box className={drawerClass.join(" ")}>
      <Box className={classes.headingBox}>
        <div
          className={classes.imageBox}
          onClick={() => {
            drawerToggle();
          }}
        >
          <img alt="" src={Logo} className={classes.image} />
        </div>

        <div className={classes.cross}>
          <CloseIcon
            style={{
              color: "#7ac119",
            }}
            fontSize="large"
            onClick={() => drawerToggle()}
          />
        </div>
      </Box>

      <Box>
        <ul className={classes.list}>
          <li>
            <Link
              onClick={() => {
                drawerToggle();
              }}
              href="#"
              className={classes.link}
            >
              Cart
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                drawerToggle();
              }}
              href="#"
              className={classes.link}
            >
              Profile
            </Link>
          </li>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => {
                  drawerToggle();
                }}
                href="#"
                className={classes.link}
              >
                {link.title}
              </Link>
            </li>
          ))}

          <li>
            <Link
              onClick={() => {
                drawerToggle();
              }}
              href="#"
              className={classes.link}
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                drawerToggle();
              }}
              href="#"
              className={classes.link}
            >
              Contact us
            </Link>
          </li>

          <li>
            <Link
              onClick={() => {
                drawerToggle();
              }}
              href="#"
              className={classes.link}
            >
              Blog
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default SideDrawer;
