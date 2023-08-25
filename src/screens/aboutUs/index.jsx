import { Grid, Typography, Button } from "@mui/material";

import { useStyles } from "./styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutUs}>
      <Grid container className={classes.gridContainer}>
        <Grid item md={4.4} sm={4.4} xs={12}>
          <div className={classes.aboutBg}>
            <Typography variant="h5" className={classes.heading}>
              About
            </Typography>
            <Typography variant="h3" className={classes.subHeading}>
              Kratom Gala
            </Typography>
            <Typography className={classes.detail}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </div>
        </Grid>

        <Grid item md={7} sm={7} xs={12}>
          <div className={classes.discoverBg}>
            <Typography>
              Lorem Ipsum has been the industry{"'"}s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Typography>

            <Button className={classes.button}>Discover More</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
