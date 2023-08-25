import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sideDrawer: {
    top: "0",
    left: "0",
    width: "275px",
    height: "100%",
    zIndex: "200",
    position: "fixed",
    background: "#fff",
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-out",
    paddingLeft: "25px",
  },

  open: {
    transform: "translateX(0)",
  },

  imageBox: {
    width: "160px",
  },

  image: {
    width: "100%",
  },

  headingBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0px 10px",
  },

  cross: {
    padding: "10px 15px 10px 0px",
  },

  link: {
    marginBottom: "25px !important",
    display: "block",
    textDecoration: "none !important",
    color: "#000 !important",
    fontFamily: "GothamBook !important",
  },
});
