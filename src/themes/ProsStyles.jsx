import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '1230px',
    margin: '216px auto 0',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      margin: '124px auto 0',
    },
  },
  hide: {
    display: 'none',
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '48px',
    fontWeight: '900',
    color: '#0E1952',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      fontSize: '30px',
      fontWeight: '800',
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
      marginTop: '32px',
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '68px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  splashImg: {
    width: '766px',
    height: '543px',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      height: '244px',
    },
  },
  paper: {
    width: '437px',
    height: '162.67px',
    border: '1px solid #177EE5',
    borderRadius: '4px',
    backgroundColor: '#F1FDFB',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      textAlign: 'center',
    },
  },
  paper1: {
    width: '437px',
    height: '162.67px',
    border: '1px solid #C2CBD8',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      textAlign: 'center',
      marginTop: '32px',
    },
  },
  paper2: {
    width: '437px',
    height: '162.67px',
    border: '1px solid #C2CBD8',
    borderRadius: '4px',
    marginTop: '27.3px',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: '22px',
    fontWeight: '900',
    color: '#0E1952',
    marginTop: '22px',
    marginLeft: '53px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  subTitle: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '300',
    color: '#4F6177',
    width: '246px',
    marginTop: '14px',
    marginLeft: '53px',
    [theme.breakpoints.down('sm')]: {
      margin: '14px auto 0',
    },
  },
  getStarted: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '900',
    color: '#177EE5',
    marginTop: '10px',
    marginLeft: '53px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

export default useStyles;
