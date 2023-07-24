import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '992px',
    margin: '217.4px auto 0',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      margin: '125.1px auto 0',
    },
  },
  title: {
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
  subText: {
    fontFamily: 'Rubik',
    fontSize: '24px',
    fontWeight: '300',
    color: '#4F6177',
    textAlign: 'center',
    marginTop: '27px',
    [theme.breakpoints.down('sm')]: {
      width: '336px',
      fontSize: '14px',
    },
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '68px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  txt: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '300',
    color: '#4F6177',
    marginTop: '37px',
    width: '186px',
  },
  hover: {
    color: '#177EE5 !important',
    fill: '#177EE5 !important',
  },
  Bluetxt: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '300',
    color: '#177EE5',
    marginTop: '37px',
    width: '186px',
    [theme.breakpoints.down('sm')]: {
      width: '144px',
      fontSize: '14px',
    },
  },
  svgSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '1230px',
    [theme.breakpoints.down('sm')]: {
      width: '336px',
    },
  },
  svgSection1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '1230px',
    [theme.breakpoints.down('sm')]: {
      width: '336px',
      marginTop: '44px',
    },
  },
}));

export default useStyles;
