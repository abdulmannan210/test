import { useState } from "react";
import { Box, Button, Grid, Input, Badge, IconButton } from "@mui/material";

import Search from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../../assets/images/header-logo.png";

import HeaderLinks from "../headerLinks";
import SideDrawer from "../sideDrawer";
import Backdrop from "../sideDrawer/backdrop";

import { useStyles } from "./styles";

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen(!open);
  };

  const backdropClick = () => {
    setOpen(false);
  };

  return (
    <header className={classes.header}>
      <SideDrawer open={open} drawerToggle={drawerToggle} />
      {open ? <Backdrop backdropClick={backdropClick} /> : null}

      <Grid container>
        <Grid
          item
          md={4}
          xs={1}
          sx={{
            "@media only screen and (max-width: 900px)": {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <div className={classes.imageBox}>
            <img className={classes.image} src={Logo} />
          </div>

          <AiOutlineMenu
            fontSize={25}
            color="#7ac119"
            onClick={() => drawerToggle()}
            className={classes.burgerIcon}
          />
        </Grid>

        <Grid item md={8} xs={11}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item md={8.5} xs={12}>
              <Box className={classes.inputBox}>
                <Input
                  placeholder="Search Products"
                  className={classes.input}
                />

                <Button startIcon={<Search />} className={classes.btn}>
                  Search
                </Button>

                <IconButton
                  sx={{
                    "@media only screen and (min-width: 900px)": {
                      display: "none",
                    },
                  }}
                  className={classes.iconBtn}
                >
                  <Search sx={{ color: "#7ac119 !important" }} />
                </IconButton>
              </Box>
            </Grid>

            <Grid
              item
              md={3}
              xs={1}
              sx={{
                "@media only screen and (max-width: 900px)": {
                  display: "none",
                },
              }}
            >
              <div className={classes.headerIcon}>
                <IconButton
                  className={[classes.iconBox, classes.cart].join(" ")}
                >
                  <Badge
                    badgeContent={2}
                    color="secondary"
                    className={classes.badge}
                  >
                    <LocalMallOutlinedIcon />
                  </Badge>
                </IconButton>

                <IconButton className={classes.iconBox}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <HeaderLinks />
    </header>
  );
};

export default Header;
