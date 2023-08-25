import { makeStyles } from "@mui/styles";

import Leaves from "../../assets/images/about-us.png";
import Medicine from "../../assets/images/about-us-bg.png";

export const useStyles = makeStyles({
  aboutUs: {
    padding: "0px 6% 0px 10%",
  },

  gridContainer: {
    position: "relative !important",
    top: "-120px !important",
  },

  aboutBg: {
    backgroundImage: `url(${Leaves})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "585px",
    padding: "132px 50px",
  },

  discoverBg: {
    backgroundColor: "#fff",
    backgroundImage: `url(${Medicine})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "770px",
    padding: "120px 80px",
    boxShadow: "rgba(0, 0, 0, 0.2) 1.95px 30px 10px",

    "& p": {
      width: "520px",
      fontSize: "18px !important",
    },
  },

  heading: {
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "GothamMedium !important",
    fontSize: "30px !important",
  },

  subHeading: {
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: "40px",
    fontFamily: "GothamBlack !important",
    fontSize: "60px !important",
  },

  detail: {
    color: "#fff",
    fontFamily: "GothamBook !important",
    fontSize: "22px !important",
  },

  button: {
    backgroundColor: "#7ac119 !important",
    padding: "10px 0px !important",
    width: "160px",
    color: "#fff !important",
    margin: "15px auto 0px !important",
    fontFamily: "GothamBold !important",
    textTransform: "inherit !important",
    fontSize: "18px !important",
  },

  "@media only screen and (max-width: 1680px)": {
    aboutUs: {
      padding: "0px 6% 0px 7%",
    },

    gridContainer: {
      top: "-100px !important",
    },

    aboutBg: {
      width: "510px",
      padding: "75px 50px",
    },

    discoverBg: {
      width: "620px",
      padding: "72px 60px",

      "& p": {
        width: "520px",
        fontSize: "16px !important",
      },
    },

    button: {
      fontSize: "16px !important",
    },

    heading: {
      fontSize: "22px !important",
    },

    subHeading: {
      marginBottom: "35px",
      fontSize: "40px !important",
    },
  },

  "@media only screen and (max-width: 1500px)": {
    aboutUs: {
      padding: "0px 6% 0px 7%",
    },

    gridContainer: {
      top: "-70px !important",
    },

    aboutBg: {
      width: "430px",
      padding: "80px 40px",
    },

    discoverBg: {
      width: "540px",
      padding: "55px 40px",

      "& p": {
        width: "420px",
        fontSize: "14px !important",
      },
    },

    button: {
      padding: "8px 0px !important",
      width: "140px",
      margin: "12px auto 0px !important",
      fontSize: "14px !important",
    },

    heading: {
      fontSize: "20px !important",
    },

    subHeading: {
      marginBottom: "28px",
      fontSize: "32px !important",
    },

    detail: {
      width: "300px",
      fontSize: "14px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    aboutUs: {
      padding: "0px 5%",
    },

    gridContainer: {
      top: "-55px !important",
    },

    aboutBg: {
      width: "334px",
      padding: "60px 30px",
    },

    discoverBg: {
      width: "460px",
      padding: "32px 30px",
      boxShadow: "rgba(0, 0, 0, 0.2) 1.95px 20px 10px",

      "& p": {
        width: "100%",
      },
    },

    button: {
      padding: "7px 0px !important",
      width: "130px",
      margin: "10px auto 0px !important",
    },

    heading: {
      fontSize: "18px !important",
    },

    subHeading: {
      marginBottom: "28px",
      fontSize: "26px !important",
    },

    detail: {
      width: "100%",
      fontSize: "14px !important",
    },
  },

  "@media only screen and (max-width: 900px)": {
    aboutUs: {
      padding: "0px 4%",
    },

    gridContainer: {
      top: "0px !important",
      marginTop: "20px",
      marginBottom: "40px",
    },

    aboutBg: {
      width: "275px",
      padding: "35px 22px",
    },

    discoverBg: {
      width: "430px",
      padding: "14px 25px",
      boxShadow: "rgba(0, 0, 0, 0.2) 1.95px 15px 10px",
      backgroundImage: "none",

      "& p": {
        fontSize: "13px",
      },
    },

    button: {
      padding: "6px 0px !important",
      margin: "8px auto 0px !important",
    },

    heading: {
      fontSize: "16px !important",
    },

    subHeading: {
      fontSize: "20px !important",
    },

    detail: {
      width: "100%",
      fontSize: "14px !important",
      lineHeight: "19px !important",
    },
  },

  "@media only screen and (max-width: 767px)": {
    aboutBg: {
      width: "100%",
      padding: "30px 18px",
    },

    discoverBg: {
      width: "100%",
      padding: "12px 16px",
    },
  },
});
