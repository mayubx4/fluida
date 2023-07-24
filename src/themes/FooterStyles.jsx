import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1230px',
    margin: '217px auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      flexDirection: 'column',
      margin: '125px auto',
    },
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: '12px',
    fontWeight: '400',
    opacity: '80%',
    width: '392px',
    marginTop: '38px',
    lineHeight: '20px',
    letterSpacing: '1px',
    [theme.breakpoints.down('sm')]: {
      width: '339px',
      lineHeight: '18px',
    },
  },
  socialDiv: {
    width: '120px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '38px',
  },
  email: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4F6177',
    marginTop: '33px',
  },
  copyrights: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#C2CBD8',
    marginTop: '33px',
    [theme.breakpoints.down('sm')]: {
      width: '254px',
      marginBottom: '63px',
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  mainHeading: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '900',
    color: '#0E1952',
    marginBottom: '16px',
  },
  txt: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4F6177',
    marginBottom: '16px',
  },
  txt1: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4F6177',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '63px',
    },
  },
  footerDiv: {
    marginLeft: '52px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

export default useStyles;
