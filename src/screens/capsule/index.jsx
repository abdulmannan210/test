import { useRef } from "react";

import { Typography, Box, Rating, Button } from "@mui/material";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Carousel from "react-elastic-carousel";

import { capsules } from "../../data/capsule";

import { useStyles } from "./styles";

const Capsule = () => {
  const classes = useStyles();

  const carouselRef = useRef(null);

  const breakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1000, itemsToShow: 5 },
    { width: 1500, itemsToShow: 5 },
  ];

  return (
    <div>
      <Box className={classes.capsule}>
        <Typography variant="h3">
          Shop by Kratom <span>Capsule</span>
        </Typography>

        <Carousel
          breakPoints={breakpoint}
          ref={carouselRef}
          pagination={false}
          className={classes.carousal}
        >
          {capsules.map((capsule) => (
            <Box
              className={[classes.boxContainer, "boxContainer"].join(" ")}
              key={capsule.id}
            >
              <div
                className={[
                  classes.imageBox,
                  capsule.small ? classes.smallSize : null,
                ].join(" ")}
              >
                <img alt="" src={capsule.image} className={classes.image} />
              </div>

              <Typography className={classes.detail}>
                {capsule.detail}
              </Typography>

              <div className={classes.rating}>
                <Rating name="simple-controlled" value={capsule.ratings} />
              </div>

              <div>
                <Typography className={classes.price}>
                  ${capsule.price}
                </Typography>
              </div>

              <div>
                <Button
                  startIcon={<LocalMallOutlinedIcon />}
                  className={classes.addToCart}
                >
                  Add To Cart
                </Button>
              </div>
            </Box>
          ))}
        </Carousel>

        <Button className={classes.button}>Order Kratom Now</Button>
      </Box>
    </div>
  );
};

export default Capsule;
