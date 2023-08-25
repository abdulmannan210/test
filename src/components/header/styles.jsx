import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  header: {
    paddingTop: "20px",
    padding: "20px 10% 0px",
  },

  burgerIcon: {
    display: "none",
  },

  imageBox: {
    width: "280px",
  },

  image: {
    width: "100%",
  },

  inputBox: {
    position: "relative",
    width: "100%",
    border: "solid 1px #ABB3BB",
    display: "flex",
    padding: "5px 0px",
    borderRadius: "6px",
  },

  btn: {
    backgroundColor: "#7ac119 !important",
    textTransform: "inherit !important",
    color: "#fff !important",
    width: "130px !important",
    padding: "8px 0px !important",
    fontSize: "14px !important",
    marginRight: "5px !important",
    fontFamily: "GothamBold !important",
  },

  input: {
    width: "100%",

    "& input": {
      color: "#ABB3BB",
      fontSize: "18px",
      padding: "0px 15px",
      fontFamily: "GothamBook",
      marginRight: "5px !important",
    },

    "&::before": {
      borderBottom: "none !important",
    },

    "&::after": {
      borderBottom: "none !important",
    },
  },

  headerIcon: {
    display: "flex",
    marginLeft: "25px",
  },

  iconBox: {
    width: "45px !important",
    height: "45px !important",
    borderRadius: "50% !important",
    backgroundColor: "#F0F0F0 !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "0px !important",
  },

  badge: {
    "& span": {
      backgroundColor: "#7ac119",
    },
  },

  cart: {
    marginRight: "35px !important",
  },

  "@media only screen and (max-width: 1680px)": {
    header: {
      padding: "20px 7% 0px",
    },

    imageBox: {
      width: "220px",
    },

    input: {
      "& input": {
        fontSize: "16px",
      },
    },

    inputBox: {
      padding: "3px 0px",
    },

    headerIcon: {
      marginLeft: "25px",
    },

    cart: {
      marginRight: "25px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    header: {
      padding: "20px 4% 0px",
    },

    imageBox: {
      width: "180px",
    },

    inputBox: {
      padding: "3px 0px",
    },

    input: {
      "& input": {
        fontSize: "14px",
      },
    },

    btn: {
      padding: "6px 0px !important",
    },

    iconBox: {
      width: "40px !important",
      height: "40px !important",

      "& svg": {
        width: "22px",
      },
    },

    headerIcon: {
      marginLeft: "20px",
    },

    cart: {
      marginRight: "20px !important",
    },
  },

  "@media only screen and (max-width: 900px)": {
    header: {
      padding: "20px 4% 0px",

      "& .MuiGrid-container": {
        justifyContent: "flex-start",
      },
    },

    imageBox: {
      display: "none",
    },

    inputBox: {
      width: "95%",
      margin: "auto",
    },

    input: {
      width: "100%",

      "& input": {
        padding: "0px 0px 0px 10px",
      },
    },

    headerIcon: {
      display: "none",
    },

    btn: {
      display: "none !important",
    },

    burgerIcon: {
      display: "block",
    },
  },
});
