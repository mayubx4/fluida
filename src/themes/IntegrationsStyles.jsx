import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '216.6px',
    overflow: 'hidden',
  },
  textDiv: {
    maxWidth: '1230px !important',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: '28px',
    fontWeight: '900',
    color: '#177EE5',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '48px',
    fontWeight: '900',
    color: '#0E1952',
    textAlign: 'center',
    marginTop: '27px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  subHeading: {
    fontFamily: 'Rubik',
    fontSize: '24px',
    fontWeight: '400',
    color: '#4F6177',
    textAlign: 'center',
    marginTop: '27px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  firstDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '68px',
    animation: '$scale 20s infinite alternate',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '32px',
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '68px',
    animation: '$scale 20s infinite alternate-reverse',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '22.9px',
    },
  },
  box: {
    width: '356px',
    height: '163px',
    border: '1px solid #C2CBD8',
    textAlign: 'center',
    padding: '60px 100px',
    marginLeft: '81px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '45px',
      padding: '0 18px',
      margin: '0 11px',
    },
  },
  '@keyframes scale': {
    '0%': {
      transform: 'translateX(-50%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  svgImg: {
    [theme.breakpoints.down('sm')]: {
      width: '65px',
      height: '14px',
      marginTop: '15.8px',
    },
  },
}));

export default useStyles;
