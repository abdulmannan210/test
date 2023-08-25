import { makeStyles } from "@mui/styles";

import BannerBg from "../../assets/images/banner-bg.png";
import BannerBack from "../../assets/images/banner-image.png";

export const useStyles = makeStyles({
  gridContainer: {
    backgroundColor: "#e8f1e0",
    padding: "80px 6% 130px 10%",
    marginTop: "30px",
    backgroundImage: `url(${BannerBg})`,
    backgroundRepeat: "no-repeat",
  },

  headerBox: {
    position: "relative",
  },

  heading: {
    textTransform: "uppercase",
    lineHeight: "80px !important",
    fontFamily: "GothamMedium !important",
    fontSize: "80px !important",

    "& span": {
      color: "#7ac119",
      fontWeight: "900",
      fontFamily: "GothamBlack !important",
    },
  },

  border: {
    height: "1.25px",
    width: "175px",
    backgroundColor: "#7ac119",
    marginTop: "10px",
    marginBottom: "20px",
  },

  description: {
    width: "85%",
    fontFamily: "GothamBook !important",
    fontSize: "18px !important",
  },

  button: {
    backgroundColor: "#7ac119 !important",
    color: "#fff !important",
    textTransform: "inherit !important",
    padding: "12px 60px !important",
    marginTop: "30px !important",
    fontFamily: "GothamBold !important",
    fontSize: "18px !important",
  },

  imageBox: {
    width: "730px",
    margin: "auto",
    backgroundImage: `url(${BannerBack})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  image: {
    width: "100%",
  },

  "@media only screen and (max-width: 1680px)": {
    gridContainer: {
      padding: "55px 6% 70px 7%",
    },

    heading: {
      lineHeight: "50px !important",
      fontSize: "50px !important",
    },

    border: {
      marginTop: "8px",
      marginBottom: "12px",
    },

    button: {
      padding: "10px 50px !important",
      marginTop: "20px !important",
      fontSize: "16px !important",
    },

    description: {
      fontSize: "16px !important",
    },

    imageBox: {
      width: "630px",
      margin: "auto",
    },

    image: {
      width: "100%",
    },
  },

  "@media only screen and (max-width: 1500px)": {
    gridContainer: {
      padding: "0px 6% 40px",
    },

    heading: {
      lineHeight: "40px !important",
      fontSize: "40px !important",
    },

    border: {
      width: "130px",
      marginTop: "5px",
      marginBottom: "10px",
    },

    button: {
      padding: "8px 40px !important",
      marginTop: "12px !important",
    },

    imageBox: {
      width: "560px",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    gridContainer: {
      padding: "0px 5% 30px",
      marginTop: "22px",
    },

    heading: {
      fontSize: "35px !important",
    },

    border: {
      width: "100px",
      marginTop: "5px",
      marginBottom: "10px",
    },

    description: {
      width: "100%",
      fontSize: "14px !important",
    },

    button: {
      padding: "6px 32px !important",
      marginTop: "10px !important",
    },

    imageBox: {
      width: "460px",
    },
  },

  "@media only screen and (max-width: 900px)": {
    gridContainer: {
      padding: "20px 4% 0px",
      marginTop: "18px",
    },

    heading: {
      lineHeight: "30px !important",
      fontSize: "27px !important",

      "& br": {
        display: "none",
      },
    },

    border: {
      width: "130px",
      marginTop: "0px",
      marginBottom: "10px",
    },

    button: {
      padding: "6px 32px !important",
      marginTop: "10px !important",
    },

    imageBox: {
      width: "350px",
    },
  },
});
