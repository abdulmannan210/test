import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  gridContainer: {
    marginTop: "15px",
  },

  links: {
    display: "flex",
  },

  rightLinks: {
    justifyContent: "center",
  },

  link: {
    textDecoration: "none !important",
    color: "#000 !important",
    marginRight: "28px !important",
    transition: "0.3s color ease-in-out !important",
    fontFamily: "GothamBook !important",
    fontSize: "18px !important",

    "&:hover": {
      color: "#80B448 !important",
    },
  },

  "@media only screen and (max-width: 1680px)": {
    link: {
      marginRight: "22px !important",
      fontSize: "16px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    link: {
      marginRight: "16px !important",
      fontSize: "14px !important",
    },
  },

  "@media only screen and (max-width: 900px)": {
    gridContainer: {
      display: "none !important",
    },
  },
});
