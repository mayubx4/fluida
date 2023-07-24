import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from '../themes/GetStartedStyles';

const GetStarted = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainDiv}>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet consectetur</Typography>
        <Typography className={classes.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Typography>
        <div className={classes.btnDiv}>
          <Button className={classes.getStarted}>Get Started</Button>
          <Button className={classes.scheduleCall}>Schedule a call</Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
