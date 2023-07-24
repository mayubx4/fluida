import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/BrandsStyles';
import amazon from '../assets/images/amazon.svg';
import github from '../assets/images/github.svg';
import google from '../assets/images/google.svg';
import tesla from '../assets/images/TESLA.svg';

const Brands = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ,sed do eiusmod tempor
      </Typography>
      <div className={classes.brandsDiv}>
        <div className={classes.firstBrandDiv}>
          <img src={amazon} alt="amazon-logo" className={classes.amazon} />
          <img src={github} alt="github-logo" className={classes.github} />
        </div>
        <div className={classes.secondBrandDiv}>
          <img src={google} alt="google-logo" className={classes.google} />
          <img src={tesla} alt="tesla-logo" className={classes.tesla} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
