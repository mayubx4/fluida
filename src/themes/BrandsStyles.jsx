import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '1019.2px',
    margin: '80px auto 0',
    [theme.breakpoints.down('sm')]: {
      width: '345px',
      margin: '125px auto 0',
    },
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    color: '#A1ACBD',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '306px',
      margin: '0 auto',
    },
  },
  brandsDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '33.9px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  firstBrandDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  secondBrandDiv: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      marginTop: '35.4px',
    },
  },
  github: {
    marginLeft: '139.9px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '107.9px',
    },
  },
  google: {
    marginLeft: '139.7px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  tesla: {
    marginLeft: '139.7px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '28px',
      width: '213.26px',
      height: '27.79px',
    },
  },
}));

export default useStyles;
