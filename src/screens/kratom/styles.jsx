import { makeStyles } from "@mui/styles";

import KratomBg from "../../assets/images/kratom-bg.png";

export const useStyles = makeStyles({
  kratom: {
    padding: "120px 12% 100px",
    backgroundImage: `url(${KratomBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  mainHeading: {
    color: "#fff",
    marginBottom: "40px !important",
    fontFamily: "GothamBold !important",
    fontSize: "50px !important",
  },

  lists: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    backgroundColor: "rgba(40,112,36,0.5)",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginBottom: "10px",
  },

  image: {
    width: "70%",
  },

  heading: {
    color: "#fff",
    marginBottom: "18px !important",
    width: "250px",
    fontFamily: "GothamBold !important",
    fontSize: "26px !important",
  },

  detail: {
    color: "#fff",
    width: "280px",
    fontFamily: "GothamBook !important",
    fontSize: "18px !important",
  },

  "@media only screen and (max-width: 1680px)": {
    kratom: {
      padding: "80px 9% 70px",
    },

    mainHeading: {
      marginBottom: "32px !important",
      fontSize: "40px !important",
    },

    logo: {
      width: "60px",
      height: "60px",
      marginBottom: "10px",
    },

    heading: {
      marginBottom: "10px !important",
      width: "220px",
      fontSize: "20px !important",
    },

    detail: {
      width: "240px",
      fontSize: "16px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    kratom: {
      padding: "45px 5%",
    },

    mainHeading: {
      marginBottom: "24px !important",
      fontSize: "26px !important",
    },

    logo: {
      width: "55px",
      height: "55px",
      marginBottom: "10px",
    },

    heading: {
      marginBottom: "10px !important",
      width: "200px",
      fontSize: "18px !important",
    },

    detail: {
      width: "200px",
      lineHeight: "19px !important",
      fontSize: "14px !important",
    },
  },

  "@media only screen and (max-width: 900px)": {
    kratom: {
      padding: "30px 4%",
    },

    mainHeading: {
      marginBottom: "18px !important",
      fontSize: "20px !important",
    },

    logo: {
      width: "50px",
      height: "50px",
      marginBottom: "10px",
    },

    heading: {
      marginBottom: "5px !important",
      width: "100%",
      fontSize: "14px !important",
    },

    detail: {
      width: "90%",
      lineHeight: "16px !important",
      fontSize: "12px !important",
    },
  },

  "@media only screen and (max-width: 767px)": {
    mainHeading: {
      textAlign: "center",
    },

    logo: {
      margin: "0px auto 20px",
    },

    heading: {
      marginBottom: "5px !important",
      width: "100%",
      fontSize: "14px !important",
    },

    lists: {
      display: "block",
      textAlign: "center",

      "& li": {
        marginBottom: "10px",
      },
    },

    detail: {
      width: "100%",
      lineHeight: "16px !important",
      fontSize: "11px !important",
    },
  },
});
