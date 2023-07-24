import React from 'react';
import { Button, Typography } from '@material-ui/core';
import useStyles from '../themes/HomeHeroStyles';
import Home from '../assets/images/Home.png';

const HomeHero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heroSection}>
        <div className={classes.firstDiv}>
          <Typography className={classes.heading}>Lorem ipsum dolor sit amet consectetur</Typography>
          <Typography className={classes.subText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <div className={classes.btnDiv}>
            <Button className={classes.getStartedBtn}>Get Started</Button>
            <Button className={classes.CallBtn}>Schedule a call</Button>
          </div>
        </div>
        <div>
          <img src={Home} alt="home-img" className={classes.homeImg} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
