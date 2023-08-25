import { makeStyles } from "@mui/styles";

import FooterBg from "../../assets/images/footer-bg.png";

export const useStyles = makeStyles({
  footer: {
    padding: "70px 6% 20px 10%",
    backgroundImage: `url(${FooterBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  logoBox: {
    marginBottom: "20px",
    width: "280px",
  },

  detail: {
    marginBottom: "20px !important",
    lineHeight: "25px !important",
    width: "380px",
    fontFamily: "PoppinsRegular !important",
  },

  follow: {
    fontFamily: "GothamBold !important",
    fontSize: "22px !important",
  },

  socialLinks: {
    display: "flex",
  },

  socialMediaIcons: {
    backgroundColor: "#fff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "25px",
    transition: "0.3s all ease-in-out !important",
    cursor: "pointer",
    margin: "20px 0px 40px",

    "&:hover": {
      backgroundColor: "#7ac119",

      "& svg": {
        color: "#fff",
      },
    },
  },

  mediaIcon: {
    color: "#7ac119",
    fontSize: "22px",
  },

  linkHeading: {
    marginBottom: "30px !important",
    fontFamily: "GothamBold !important",
    fontSize: "22px !important",
  },

  links: {
    display: "flex",

    "& ul": {
      "& li": {
        marginBottom: "10px",
      },
    },
  },

  link: {
    textDecoration: "none !important",
    color: "#000 !important",
    transition: "0.3s color ease-in-out !important",
    fontFamily: "GothamBook !important",
    fontSize: "18px !important",

    "&:hover": {
      color: "#80B448 !important",
    },
  },

  pageList: {
    marginLeft: "80px",
  },

  contact: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",

    "& span": {
      marginLeft: "12px",
      fontFamily: "PoppinsRegular",
      fontSize: "17px",
    },
  },

  mail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",

    "& span": {
      marginLeft: "12px",
      fontFamily: "PoppinsRegular",
      fontSize: "17px",
    },
  },

  location: {
    display: "flex",
    alignItems: "center",

    "& span": {
      marginLeft: "12px",
      width: "250px",
      fontFamily: "PoppinsRegular",
      fontSize: "17px",
    },
  },

  lastSection: {
    marginTop: "20px",

    "& p": {
      fontFamily: "GothamBook !important",
      fontSize: "14px",
    },
  },

  disclaimer: {
    marginBottom: "8px !important",
    fontFamily: "GothamBold !important",
    fontSize: "22px !important",
  },

  cardGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  paymentMethod: {
    marginRight: "30px !important",
    fontFamily: "GothamBold !important",
    fontSize: "17px !important",
  },

  cards: {
    display: "flex",
    alignItems: "center",
  },

  cardBox: {
    marginRight: "10px",
  },

  image: {
    width: "100%",
  },

  description: {
    marginBottom: "20px",
  },

  copyrights: {
    fontSize: "17px !important",
  },

  "@media only screen and (max-width: 1680px)": {
    footer: {
      padding: "60px 6% 15px 7%",
    },

    logoBox: {
      marginBottom: "15px",
      width: "260px",
    },

    detail: {
      marginBottom: "16px !important",
      width: "330px",
    },

    follow: {
      fontSize: "20px !important",
    },

    socialMediaIcons: {
      width: "35px",
      height: "35px",
      marginRight: "20px",
      margin: "10px 0px 25px",
    },

    mediaIcon: {
      fontSize: "19px",
    },

    linkHeading: {
      marginBottom: "22px !important",
      fontSize: "20px !important",
    },

    link: {
      fontSize: "16px !important",
    },

    pageList: {
      marginLeft: "40px",
    },

    contact: {
      marginBottom: "10px",

      "& span": {
        marginLeft: "10px",
        fontSize: "15px",
      },
    },

    mail: {
      marginBottom: "10px",

      "& span": {
        marginLeft: "10px",
        fontSize: "15px",
      },
    },

    location: {
      "& span": {
        marginLeft: "10px",
        fontSize: "15px",
      },
    },

    lastSection: {
      marginTop: "10px",
    },

    disclaimer: {
      fontSize: "20px !important",
    },

    paymentMethod: {
      marginRight: "30px !important",
      fontSize: "16px !important",
    },

    cardBox: {
      marginRight: "10px",
    },

    copyrights: {
      fontSize: "15px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    footer: {
      padding: "45px 5% 15px",
    },

    logoBox: {
      marginBottom: "12px",
      width: "230px",
    },

    detail: {
      marginBottom: "16px !important",
      lineHeight: "20px !important",
      width: "230px",
      fontSize: "14px !important",
    },

    follow: {
      fontSize: "20px !important",
    },

    socialMediaIcons: {
      width: "30px",
      height: "30px",
      marginRight: "15px",
      margin: "8px 0px 15px",
    },

    mediaIcon: {
      fontSize: "17px",
    },

    linkHeading: {
      fontSize: "20px !important",
    },

    link: {
      fontSize: "13px !important",
    },

    pageList: {
      marginLeft: "30px",
    },

    contact: {
      marginBottom: "8px",

      "& span": {
        fontSize: "14px",
      },

      "& svg": {
        fontSize: "20px",
      },
    },

    mail: {
      marginBottom: "8px",

      "& span": {
        fontSize: "14px",
      },

      "& svg": {
        fontSize: "20px",
      },
    },

    location: {
      "& span": {
        marginLeft: "10px",
        fontSize: "14px",
      },

      "& svg": {
        fontSize: "20px",
      },
    },

    lastSection: {
      marginTop: "10px",
    },

    disclaimer: {
      fontSize: "20px !important",
    },

    paymentMethod: {
      marginRight: "22px !important",
      fontSize: "16px !important",
    },

    description: {
      marginBottom: "12px",
    },
  },

  "@media only screen and (max-width: 900px)": {
    footer: {
      padding: "30px 4% 10px",
    },

    logoBox: {
      marginBottom: "10px",
      width: "230px",
    },

    detail: {
      marginBottom: "12px !important",
      lineHeight: "18px !important",
      width: "100%",
      fontSize: "14px !important",
    },

    follow: {
      fontSize: "18px !important",
    },

    socialMediaIcons: {
      width: "28px",
      height: "28px",
      marginRight: "15px",
      margin: "6px 0px 10px",
    },

    mediaIcon: {
      fontSize: "15px",
    },

    linkHeading: {
      marginBottom: "16px !important",
      fontSize: "18px !important",
    },

    links: {
      "& ul": {
        "& li": {
          marginBottom: "5px",
        },
      },
    },

    link: {
      fontSize: "14px !important",
    },

    pageList: {
      marginLeft: "38px",
    },

    contact: {
      marginBottom: "8px",

      "& svg": {
        fontSize: "20px",
      },
    },

    mail: {
      marginBottom: "8px",

      "& svg": {
        fontSize: "20px",
      },
    },

    location: {
      "& span": {
        width: "100%",
      },

      "& svg": {
        fontSize: "20px",
      },
    },

    lastSection: {
      marginTop: "10px",

      "& p": {
        fontSize: "12px !important",
      },
    },

    disclaimer: {
      fontSize: "18px !important",
      marginBottom: "5px !important",
    },

    paymentMethod: {
      marginRight: "22px !important",
      fontSize: "14px !important",
    },
  },

  "@media only screen and (max-width: 767px)": {
    logoBox: {
      width: "200px",
      margin: "0px auto 10px",
    },

    detail: {
      marginBottom: "10px !important",
    },

    linkHeading: {
      marginBottom: "12px !important",
    },

    links: {
      marginBottom: "10px",
    },

    paymentMethod: {
      marginRight: "22px !important",
      fontSize: "14px !important",
    },

    cardGrid: {
      display: "block",
      textAlign: "center",
      marginTop: "10px !important",
    },

    copyrights: {
      textAlign: "center",
      marginTop: "10px !important",
    },
  },
});
