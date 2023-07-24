import React from 'react';
import { Button, Typography } from '@material-ui/core';
import useStyles from '../themes/PostsStyles';
import Home from '../assets/images/Home.png';

const Posts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstSection}>
        <div className={classes.section1}>
          <div>
            <Typography className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
            <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div className={classes.ImgTextDiv}>
            <div>
              <img src={Home} alt="home-img" className={classes.homeImg} />
            </div>
            <div>
              <Typography className={classes.title}>Lorem ipsum dolor sit</Typography>
              <Typography className={classes.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
              <Button className={classes.btn}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div>
          <Typography className={classes.title}>Lorem ipsum dolor sit</Typography>
          <Typography className={classes.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <Button className={classes.btn}>Get Started</Button>
        </div>
        <div>
          <img src={Home} alt="home-img" className={classes.homeImg} />
        </div>
      </div>
      <div className={classes.thirdSection}>
        <div className={classes.section2}>
          <div>
            <img src={Home} alt="home-img" className={classes.homeImg} />
          </div>
          <div>
            <Typography className={classes.title}>Lorem ipsum dolor sit</Typography>
            <Typography className={classes.subTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </Typography>
            <Button className={classes.btn}>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
