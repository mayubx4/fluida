import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appbar: {
    position: 'absolute',
    background: 'none',
    marginTop: '35px',
    zIndex: '1301',
    [theme.breakpoints.down('sm')]: {
      marginTop: '17px',
    },
  },
  toolbar: {
    width: '1270px',
    margin: '0 auto',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '344px',
      height: '44px',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
  },
  btnDiv: {
    marginLeft: '-420px',
    marginBottom: '5px',
  },
  btn: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: '15px',
    textTransform: 'none',
    '&:hover': {
      background: 'none',
    },
  },
  btnPricing: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: '15px',
    textTransform: 'none',
    margin: '0 50px',
    '&:hover': {
      background: 'none',
    },
  },
  loginBtn: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: '15px',
    textTransform: 'none',
    '&:hover': {
      background: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  signUpBtn: {
    fontFamily: 'Rubik',
    fontWeight: '900',
    fontSize: '15px',
    textTransform: 'none',
    width: '176px',
    height: '50px',
    backgroundColor: '#177EE5',
    color: '#fff',
    marginLeft: '33px',
    '&:hover': {
      backgroundColor: '#177EE5',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  btnWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menu: {
    display: 'none',
    color: '#177EE5',
    position: 'absolute',
    right: '0',
    border: '1px solid #177EE5',
    borderRadius: '5px',
    padding: '0',
    width: '47px',
    height: '44px',
    marginRight: '10px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    backgroundColor: '#fcebde',
    color: '#fff',
    height: '100vh',
    overflow: 'hidden',
    width: '100%',
  },
  drawerHeader: {
    marginTop: '95px',
  },
  listBtn: {
    marginBottom: '35px',
    '& .MuiTypography-body1': {
      fontFamily: 'Rubik',
      fontSize: '15px',
      fontWeight: '400',
      color: '#0E1952',
    },
  },
  gettingStartedBtn: {
    fontFamily: 'Rubik',
    fontWeight: '900',
    fontSize: '15px',
    textTransform: 'none',
    width: '176px',
    height: '50px',
    backgroundColor: '#177EE5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#177EE5',
    },
  },
  lists: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  },
  socialDiv: {
    width: '120px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '106px',
    marginLeft: '20px',
  },
  email: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#000000',
    marginTop: '38px',
    marginLeft: '20px',
  },
  copyrights: {
    fontFamily: 'Rubik',
    fontSize: '16px',
    fontWeight: '400',
    color: '#C2CBD8',
    marginTop: '38px',
    width: '255px',
    marginLeft: '20px',
  },
}));

export default useStyles;
