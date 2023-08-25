import { useRef } from "react";

import { Typography, Box } from "@mui/material";

import Carousel from "react-elastic-carousel";

import { categories } from "../../data/categories";

import { useStyles } from "./styles";

const Categories = () => {
  const classes = useStyles();

  const carouselRef = useRef(null);

  const breakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 3 },
    { width: 750, itemsToShow: 4 },
    { width: 1000, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
    { width: 2000, itemsToShow: 4 },
  ];

  return (
    <Box className={classes.categories}>
      <Typography variant="h3">
        Kratom Extract <span>Categories</span>
      </Typography>

      <Carousel
        breakPoints={breakpoint}
        ref={carouselRef}
        className={classes.carousal}
      >
        {categories.map((category) => (
          <Box className={classes.boxContainer} key={category.id}>
            <div className={classes.imageBox}>
              <img alt="" src={category.image} className={classes.image} />
            </div>

            <Typography>Extracts</Typography>
            <Typography variant="h5">{category.heading}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Categories;
