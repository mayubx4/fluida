import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fcebde',
    height: '830px',
    [theme.breakpoints.down('sm')]: {
      height: '875px',
    },
  },
  heroSection: {
    width: '1230px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '55px auto 0',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      flexDirection: 'column',
      margin: '125px auto 0',
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '50px',
    fontWeight: '900',
    width: '569px',
    color: '#0E1952',
    lineHeight: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      fontSize: '30px',
      fontWeight: '800',
      textAlign: 'center',
      margin: '0 auto'
    },
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '400',
    opacity: '80%',
    width: '592px',
    marginTop: '32px',
    [theme.breakpoints.down('sm')]: {
      width: '336px',
      fontSize: '14px',
      textAlign: 'center',
    },
  },
  btnDiv: {
    marginTop: '32px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  getStartedBtn: {
    width: '172px',
    height: '48px',
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'none',
    color: '#fff',
    backgroundColor: '#177EE5',
    '&:hover': {
      backgroundColor: '#177EE5',
    },
    [theme.breakpoints.down('sm')]: {
      width: '162px',
    },
  },
  CallBtn: {
    width: '172px',
    height: '48px',
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'none',
    backgroundColor: '#fff',
    marginLeft: '27px',
    '&:hover': {
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      width: '162px',
    },
  },
  homeImg: {
    width: '546px',
    height: '429.5px',
    [theme.breakpoints.down('sm')]: {
      width: '346px',
      height: '272.02px',
      marginTop: '53px',
    },
  },
}));

export default useStyles;
