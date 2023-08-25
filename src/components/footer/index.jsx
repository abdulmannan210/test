import { Box, Typography, Grid, Link } from "@mui/material";

import { MdEmail, MdCall } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import FooterLogo from "../../assets/images/logo.png";

import { cards, pageLinks, quickLinks, socialMedia } from "../../data/links";

import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item md={4} xs={12}>
          <div className={classes.logoBox}>
            <img src={FooterLogo} alt="" className={classes.image} />
          </div>

          <Typography className={classes.detail}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s.
          </Typography>

          <div>
            <Typography variant="h5" className={classes.follow}>
              Follow Us
            </Typography>
            <div className={classes.socialLinks}>
              {socialMedia.map((Icon, index) => (
                <div className={classes.socialMediaIcons} key={index}>
                  {<Icon.icon className={classes.mediaIcon} />}
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography variant="h5" className={classes.linkHeading}>
            Quick Links
          </Typography>

          <Box className={classes.links}>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href="#" className={classes.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul>
              {pageLinks.map((link) => (
                <li key={link.title} className={classes.pageList}>
                  <Link href="#" className={classes.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Typography variant="h5" className={classes.linkHeading}>
            Adress
          </Typography>

          <div className={classes.contact}>
            <MdCall color="#80B448" fontSize={25} />
            <span>123-456-7890</span>
          </div>

          <div className={classes.mail}>
            <MdEmail color="#80B448" fontSize={25} />
            <span>support@yourdomain.com</span>
          </div>

          <div className={classes.location}>
            <ImLocation color="#80B448" fontSize={25} />
            <span>locatiion_on3346 Molino invine CA 92618</span>
          </div>
        </Grid>
      </Grid>

      <div className={classes.lastSection}>
        <Typography variant="h5" className={classes.disclaimer}>
          Disclaimer
        </Typography>

        <div className={classes.description}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries.
          </Typography>
          <br />

          <Typography>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </Typography>
          <br />

          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Typography>
        </div>

        <Grid container alignItems={"center"}>
          <Grid
            item
            md={4}
            sm={4}
            xs={12}
            sx={{
              "@media only screen and (max-width: 767px)": {
                order: 2,
              },
            }}
          >
            <Typography className={classes.copyrights}>
              Copyrights &copy; 2023 All Rights Reserved
            </Typography>
          </Grid>

          <Grid item md={8} sm={8} xs={12} className={classes.cardGrid}>
            <Typography className={classes.paymentMethod} variant="h6">
              Payment method
            </Typography>

            <div className={classes.cards}>
              {cards.map((card) => (
                <div className={classes.cardBox} key={card.image}>
                  <img alt="" src={card.image} className={classes.image} />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
