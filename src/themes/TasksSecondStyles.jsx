import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1265px',
    display: 'flex',
    flexDirection: 'column',
    margin: '217px auto 0',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      margin: '125px auto 0',
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '48px',
    fontWeight: '900',
    color: '#0E1952',
    textAlign: 'center',
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
  secondDiv: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  firstPart: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: '68px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  txt: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '400',
    color: '#4F6177',
    textAlign: 'center',
    width: '186px',
    marginTop: '37px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      width: '144px',
      marginBottom: '44px',
      margin: '32px auto 0',
    },
  },
  hover: {
    color: '#177EE5 !important',
    fill: '#177EE5 !important',
  },
}));

export default useStyles;
