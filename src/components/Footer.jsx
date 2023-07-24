import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/FooterStyles';
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/twitter.svg';
import linkedin from '../assets/images/linkedin.svg';
import victory from '../assets/images/victory.svg';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstDiv}>
        <img src={logo} alt="logo" />
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Typography>
        <div className={classes.socialDiv}>
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={victory} alt="victory" />
        </div>
        <Typography className={classes.email}>hello@templateondemand.co</Typography>
        <Typography className={classes.copyrights}>© 2021 Templateondemand.co.All Rights Reserved.</Typography>
      </div>
      <div className={classes.secondDiv}>
        <div>
          <Typography className={classes.mainHeading}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt1}>Lorem ipsum</Typography>
        </div>
        <div className={classes.footerDiv}>
          <Typography className={classes.mainHeading}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt1}>Lorem ipsum</Typography>
        </div>
        <div className={classes.footerDiv}>
          <Typography className={classes.mainHeading}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt1}>Lorem ipsum</Typography>
        </div>
        <div className={classes.footerDiv}>
          <Typography className={classes.mainHeading}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt}>Lorem ipsum</Typography>
          <Typography className={classes.txt1}>Lorem ipsum</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
