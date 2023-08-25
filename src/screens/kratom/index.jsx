import { Typography, Box } from "@mui/material";

import { kratoms } from "../../data/kratom";

import { useStyles } from "./styles";

const Kratom = () => {
  const classes = useStyles();

  return (
    <Box className={classes.kratom}>
      <Typography variant="h4" className={classes.mainHeading}>
        Why Kratom
      </Typography>

      <ul className={classes.lists}>
        {kratoms.map((kratom) => (
          <li key={kratom.id} className={classes.listItem}>
            <div className={classes.logo}>
              <img src={kratom.image} className={classes.image} />
            </div>

            <Typography variant="h5" className={classes.heading}>
              {kratom.heading}
            </Typography>

            <Typography className={classes.detail}>{kratom.detail}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Kratom;
