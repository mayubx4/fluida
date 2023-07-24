import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/IntegrationsStyles';
import airtable from '../assets/images/airtable.svg';
import githubBlack from '../assets/images/githubBlack.svg';
import hubspot from '../assets/images/hubspot.svg';
import paddle from '../assets/images/paddle.svg';
import slack from '../assets/images/slack.svg';
import stripe from '../assets/images/stripe.svg';
import avocode from '../assets/images/avocode.svg';

const Integrations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textDiv}>
        <Typography className={classes.title}>Integrations</Typography>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
        <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur</Typography>
      </div>
      <div className={classes.firstDiv}>
        <div className={classes.box}>
          <img src={avocode} alt="avocode" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={airtable} alt="airtable" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={stripe} alt="stripe" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={githubBlack} alt="githubBlack" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={hubspot} alt="hubspot" className={classes.svgImg} />
        </div>
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.box}>
          <img src={paddle} alt="paddle" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={slack} alt="slack" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={airtable} alt="airtable" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={githubBlack} alt="githubBlack" className={classes.svgImg} />
        </div>
        <div className={classes.box}>
          <img src={hubspot} alt="hubspot" className={classes.svgImg} />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
