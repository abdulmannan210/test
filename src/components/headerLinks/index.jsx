import { Grid, Link } from "@mui/material";

import { useStyles } from "./styles";
import { links } from "../../data/header-links";

const HeaderLinks = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item md={8.5}>
        <div className={classes.links}>
          {links.map((link, index) => (
            <Link key={index} href="#" className={classes.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </Grid>

      <Grid item md={3.5}>
        <div className={[classes.links, classes.rightLinks].join(" ")}>
          <Link href="#" className={classes.link}>
            About us
          </Link>
          <Link href="#" className={classes.link}>
            Contact us
          </Link>
          <Link href="#" className={classes.link}>
            Blog
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeaderLinks;
