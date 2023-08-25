import { Grid, Typography, Button } from "@mui/material";

import BannerPill from "../../assets/images/banner-pill.png";

import { useStyles } from "./styles";

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} alignItems={"center"}>
      <Grid item md={4.5} xs={12}>
        <div className={classes.headerBox}>
          <Typography variant="h2" className={classes.heading}>
            <span>Karatom</span> <br />
            For Sale
          </Typography>

          <div className={classes.border} />
        </div>

        <Typography className={classes.description}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </Typography>

        <Button className={classes.button}>Shop now</Button>
      </Grid>

      <Grid item md={7.5} xs={12}>
        <div className={classes.imageBox}>
          <img src={BannerPill} alt="BannerImage" className={classes.image} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;
