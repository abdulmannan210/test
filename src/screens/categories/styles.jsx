import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  categories: {
    padding: "0px 6%",
    borderBottom: "1px solid #E7E7E7",
    marginBottom: "30px",

    "& h3": {
      textAlign: "center",
      marginBottom: "50px",
      fontFamily: "GothamMedium !important",

      "& span": {
        color: "#7ac119",
        fontFamily: "GothamBlack !important",
      },
    },
  },

  carousal: {
    "& button": {
      backgroundColor: "transparent !important",
      boxShadow: "none !important",

      "&:hover": {
        color: "#000 !important",
      },
    },
  },

  boxContainer: {
    textAlign: "center",

    "& p": {
      fontFamily: "GothamMedium !important",
      fontSize: "20px",
    },

    "& h5": {
      fontFamily: "GothamMedium !important",
      fontSize: "30px",
    },
  },

  imageBox: {
    width: "250px",
    marginBottom: "15px",
    margin: "auto",
  },

  image: {
    width: "100%",
  },

  "@media only screen and (max-width: 1680px)": {
    categories: {
      padding: "0px 6%",
      marginBottom: "22px",

      "& h3": {
        marginBottom: "30px",
        fontSize: "38px",
      },
    },

    imageBox: {
      width: "200px",
      marginBottom: "15px",
    },

    image: {
      width: "100%",
    },

    boxContainer: {
      "& p": {
        fontSize: "16px",
      },

      "& h5": {
        fontSize: "22px",
      },
    },
  },

  "@media only screen and (max-width: 1500px)": {
    categories: {
      padding: "0px 6%",

      "& h3": {
        marginBottom: "25px",
        fontSize: "32px",
      },
    },

    imageBox: {
      width: "160px",
      marginBottom: "15px",
    },

    boxContainer: {
      "& p": {
        fontSize: "14px",
      },

      "& h5": {
        fontSize: "20px",
      },
    },
  },

  "@media only screen and (max-width: 1200px)": {
    categories: {
      padding: "0px 5%",
      marginBottom: "20px",

      "& h3": {
        marginBottom: "20px",
        fontSize: "28px",
      },
    },

    boxContainer: {
      "& p": {
        fontSize: "13px",
      },

      "& h5": {
        fontSize: "18px",
      },
    },

    carousal: {
      "& button": {
        fontSize: "18px",
      },
    },

    imageBox: {
      width: "120px",
      marginBottom: "10px",
    },
  },

  "@media only screen and (max-width: 900px)": {
    categories: {
      padding: "0px 4%",

      "& h3": {
        marginBottom: "16px",
        fontSize: "22px",
      },
    },

    carousal: {
      "& button": {
        fontSize: "16px",
      },
    },

    imageBox: {
      width: "100px",
      marginBottom: "5px",
    },
  },
});
