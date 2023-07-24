import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '217px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '125.3px',
    },
  },
  firstSection: {
    backgroundColor: '#fcebde',
    height: '746px',
    [theme.breakpoints.down('sm')]: {
      height: '640px',
    },
  },
  section1: {
    width: '1230px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '346px',
    },
  },
  heading: {
    fontFamily: 'Rubik',
    fontSize: '48px',
    fontWeight: '900',
    color: '#0E1952',
    textAlign: 'center',
    paddingTop: '68px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  subHeading: {
    fontFamily: 'Rubik',
    fontSize: '24px',
    fontWeight: '400',
    color: '#4F6177',
    textAlign: 'center',
    marginTop: '25px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  homeImg: {
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      height: '272.02px',
    },
  },
  ImgTextDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '68px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: '50px',
    fontWeight: '900',
    color: '#0E1952',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      textAlign: 'center',
      marginTop: '32px',
    },
  },
  subTitle: {
    fontFamily: 'Rubik',
    fontSize: '18px',
    fontWeight: '400',
    opacity: '80%',
    width: '592px',
    marginTop: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      width: '312px',
      textAlign: 'center',
      margin: '32px auto 0',
    },
  },
  btn: {
    fontFamily: 'Rubik',
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'none',
    color: '#fff',
    width: '172px',
    height: '48px',
    backgroundColor: '#177EE5',
    marginTop: '32px',
    '&:hover': {
      backgroundColor: '#177EE5',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      marginBottom: '32px',
      marginLeft: '85px',
    },
  },
  secondSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '1230px',
    margin: '0 auto',
    marginTop: '68px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '346px',
    },
  },
  thirdSection: {
    backgroundColor: '#fcebde',
    height: '565px',
    marginTop: '69.5px',
    [theme.breakpoints.down('sm')]: {
      height: '640px',
    },
  },
  section2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '1230px',
    margin: '0 auto',
    paddingTop: '67.5px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      width: '346px',
      paddingTop: '2px',
    },
  },
}));

export default useStyles;
