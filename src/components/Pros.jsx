import React, { useState } from 'react';
import clsx from 'clsx';
import { Typography, Paper } from '@material-ui/core';
import useStyles from '../themes/ProsStyles';
import unsplash from '../assets/images/unsplash.png';
import mimi from '../assets/images/mimi.jpg';
import surface from '../assets/images/surface.jpg';

const Pros = () => {
  const classes = useStyles();
  const [click, setClick] = useState(0);
  const handleClick = c => {
    setClick(c);
  };
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
        <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur</Typography>
      </div>
      <div className={classes.secondDiv}>
        <div>
          <img src={unsplash} alt="unsplash" className={clsx(classes.splashImg, { [classes.hide]: click !== 0 })} />
          <img src={mimi} alt="unsplash" className={clsx(classes.splashImg, { [classes.hide]: click !== 1 })} />
          <img src={surface} alt="unsplash" className={clsx(classes.splashImg, { [classes.hide]: click !== 2 })} />
        </div>
        <div>
          <Paper
            className={clsx(classes.paper1, { [classes.paper]: click === 0 })}
            elevation={0}
            onClick={() => handleClick(0)}
          >
            <Typography className={classes.title}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subTitle}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Typography>
            <Typography className={classes.getStarted}>Get Started</Typography>
          </Paper>
          <Paper
            className={clsx(classes.paper2, { [classes.paper]: click === 1 })}
            elevation={0}
            onClick={() => handleClick(1)}
          >
            <Typography className={classes.title}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subTitle}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Typography>
            <Typography className={classes.getStarted}>Get Started</Typography>
          </Paper>
          <Paper
            className={clsx(classes.paper2, { [classes.paper]: click === 2 })}
            elevation={0}
            onClick={() => handleClick(2)}
          >
            <Typography className={classes.title}>Lorem ipsum dolor</Typography>
            <Typography className={classes.subTitle}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </Typography>
            <Typography className={classes.getStarted}>Get Started</Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Pros;
