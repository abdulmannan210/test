import { makeStyles } from "@mui/styles";

import CapsuleBg from "../../assets/images/capsule-bg.jpg";

export const useStyles = makeStyles({
  capsule: {
    backgroundImage: `url(${CapsuleBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "bottom",
    padding: "0px 6% 160px",
    textAlign: "center",

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
    "& .rec-carousel-item": {
      cursor: "pointer",

      "& .rec-item-wrapper": {
        alignItems: "center",
        padding: "30px 0px 20px !important",
      },

      "&:hover": {
        "& .boxContainer": {
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          height: "100%",
        },

        "& button": {
          display: "flex !important",
        },
      },
    },

    "& .rec-arrow": {
      backgroundColor: "transparent !important",
      boxShadow: "none !important",

      "&:hover": {
        color: "#000 !important",
      },
    },
  },

  boxContainer: {
    textAlign: "center",
    height: "330px",
    width: "90%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    transition: "0.3s all ease-in-out !important",
    padding: "30px 0px 20px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  imageBox: {
    width: "140px",
    marginBottom: "25px",
    margin: "auto",
  },

  smallSize: {
    width: "110px",
  },

  image: {
    width: "100%",
  },

  detail: {
    textTransform: "uppercase",
    width: "90%",
    fontFamily: "GothamBold !important",
  },

  price: {
    fontFamily: "PoppinsSemibold !important",
    color: "#7ac119 !important",
    fontSize: "24px !important",
  },

  rating: {
    margin: "5px 0px",
  },

  addToCart: {
    backgroundColor: "#7ac119 !important",
    width: "200px",
    padding: "12px 0px !important",
    color: "#fff !important",
    margin: "15px auto 20px !important",
    display: "none !important",
    fontFamily: "PoppinsBold !important",
  },

  button: {
    backgroundColor: "#3d8e06 !important",
    padding: "12px 0px !important",
    width: "220px",
    color: "#fff !important",
    margin: "50px auto 0px !important",
    fontFamily: "PoppinsBold !important",
  },

  "@media only screen and (max-width: 1680px)": {
    capsule: {
      padding: "0px 6% 100px",

      "& h3": {
        marginBottom: "30px",
        fontSize: "38px",
      },
    },

    carousal: {
      "& .rec-carousel-item": {
        "& .rec-item-wrapper": {
          padding: "20px 0px 20px !important",
        },
      },
    },

    boxContainer: {
      height: "300px",
      width: "90%",
      padding: "20px 0px 20px !important",
    },

    imageBox: {
      width: "120px",
      marginBottom: "25px",
    },

    smallSize: {
      width: "100px",
    },

    rating: {
      margin: "5px 0px",
    },

    price: {
      fontSize: "20px !important",
    },

    detail: {
      fontSize: "14px !important",
    },

    addToCart: {
      width: "170px",
      padding: "8px 0px !important",
      margin: "12px auto 15px !important",
    },

    button: {
      padding: "10px 0px !important",
      width: "200px",
      margin: "30px auto 0px !important",
    },
  },

  "@media only screen and (max-width: 1500px)": {
    capsule: {
      padding: "0px 6% 100px",

      "& h3": {
        marginBottom: "25px",
        fontSize: "32px",
      },
    },

    boxContainer: {
      height: "280px",
    },

    imageBox: {
      width: "105px",
      marginBottom: "25px",
    },

    smallSize: {
      width: "85px",
    },

    detail: {
      width: "80%",
      fontSize: "13px !important",
    },

    rating: {
      margin: "5px 0px",
    },

    price: {
      fontSize: "18px !important",
    },

    addToCart: {
      width: "140px",
      padding: "6px 0px !important",
      margin: "10px auto 13px !important",
    },

    button: {
      padding: "8px 0px !important",
      width: "195px",
      margin: "25px auto 0px !important",
    },
  },

  "@media only screen and (max-width: 1200px)": {
    capsule: {
      padding: "0px 5% 30px",

      "& h3": {
        marginBottom: "20px",
        fontSize: "28px",
      },
    },

    carousal: {
      "& .rec-carousel-item": {
        "& .rec-item-wrapper": {
          padding: "20px 0px 20px !important",
        },
      },

      "& .rec-arrow": {
        fontSize: "18px",
      },
    },

    boxContainer: {
      height: "250px",
    },

    imageBox: {
      width: "100px",
      marginBottom: "15px",
    },

    smallSize: {
      width: "80px",
    },

    rating: {
      margin: "2px 0px",
    },

    price: {
      fontSize: "16px !important",
    },

    addToCart: {
      width: "135px",
      padding: "5px 0px !important",
      margin: "8px auto 0px !important",

      "& svg": {
        fontSize: "18px !important",
      },
    },

    button: {
      padding: "6px 0px !important",
      width: "185px",
      margin: "15px auto 0px !important",
    },
  },

  "@media only screen and (max-width: 900px)": {
    capsule: {
      padding: "0px 4% 18px",

      "& h3": {
        marginBottom: "16px",
        fontSize: "22px",
      },
    },

    carousal: {
      "& .rec-carousel-item": {
        "& .rec-item-wrapper": {
          padding: "10px 0px 5px !important",
        },
      },

      "& .rec-arrow": {
        fontSize: "16px",
      },
    },

    boxContainer: {
      height: "210px",

      "& p": {
        fontSize: "12px !important",
      },
    },

    imageBox: {
      width: "85px",
      marginBottom: "15px",
    },

    smallSize: {
      width: "65px",
    },

    detail: {
      fontSize: "12px !important",
    },

    rating: {
      margin: "2px 0px",

      "& label": {
        fontSize: "18px",
      },
    },

    addToCart: {
      width: "120px",
      padding: "3px 0px !important",
      margin: "8px auto 0px !important",
      fontSize: "12px !important",

      "& svg": {
        fontSize: "16px !important",
      },
    },

    button: {
      padding: "5px 0px !important",
      width: "160px",
      margin: "12px auto 0px !important",
      fontSize: "12px !important",
    },
  },

  "@media only screen and (max-width: 767px)": {
    carousal: {
      "& .rec-carousel-item": {
        "& .rec-item-wrapper": {
          padding: "10px 0px 5px !important",
        },
      },

      "& .rec-arrow": {
        fontSize: "16px",
      },
    },
  },
});
