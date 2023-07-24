import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1230px',
    height: '396px',
    margin: '216.7px auto 0',
    backgroundColor: '#F8FAFF',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '427px',
      margin: '124.8px auto 0',
    },
  },
  mainDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '592px',
    margin: '0 auto',
    paddingTop: '53px',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      paddingTop: '80px',
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '50px',
    fontWeight: '800',
    color: '#0E1952',
    textAlign: 'center',
    width: '566px',
    lineHeight: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      fontSize: '30px',
      lineHeight: '40px',
    },
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '400',
    opacity: '80%',
    textAlign: 'center',
    width: '592px',
    marginTop: '32px',
    lineHeight: '25px',
    [theme.breakpoints.down('sm')]: {
      width: '336px',
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  getStarted: {
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'none',
    backgroundColor: '#177EE5',
    borderRadius: '4px',
    color: '#fff',
    width: '172px',
    height: '48px',
    '&:hover': {
      backgroundColor: '#177EE5',
    },
  },
  scheduleCall: {
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'none',
    backgroundColor: '#F6F6F6',
    borderRadius: '4px',
    color: '#000000',
    width: '172px',
    height: '48px',
    marginLeft: '27px',
    '&:hover': {
      backgroundColor: '#F6F6F6',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  btnDiv: {
    display: 'flex',
    flexDirection: 'row',
    margin: '19px auto 0',
  },
}));

export default useStyles;
