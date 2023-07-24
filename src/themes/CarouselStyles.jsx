import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '1230px',
    margin: '249px auto 0',
    [theme.breakpoints.down('sm')]: {
      width: '340px',
      marginTop: '110px',
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
    marginBottom: '68px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
      fontSize: '14px',
    },
  },
  swiper: {
    backgroundColor: '#fcebde',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  swiperFooter: {
    width: '596px',
    margin: '0 auto',
    padding: '34px 0',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  swiperTitle: {
    fontSize: '30px',
    marginBottom: '32px',
    fontWeight: '900',
    color: '#0e1952',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  swiperBody: {
    fontSize: '18px',
    color: '#000',
    opacity: '.8',
    marginBottom: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  swiperNav: {
    backgroundColor: '#fff',
    color: '#000',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    '&:after': {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  swipeNxt: {
    right: '-100px',
  },
  swipePrev: {
    left: '-100px',
  },
  imgSwiper: {
    width: '100%',
    height: '700px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  founderBoxes: {
    backgroundColor: '#fff',
    paddingTop: '70px',
    display: 'flex',
    // marginRight: '-33px',
  },
  founderBox: {
    // width: '33.33%',
    // padding: '0 20px',
    textAlign: 'center',
    // width:'383px',
    // [theme.breakpoints.down('sm')]: {
    //   width: '50%'
    // },
  },
  founderBig: {
    display: 'flex',
    // width:'70%'
  },
  founderImg: {
    width: '100%',
    height: '200px',
    objectFit: 'scale-down',
    opacity: '.6',
  },
  swiperTitle1: {
    fontFamily: 'Rubik',
    fontSize: '30px',
    fontWeight: '800',
    color: '#0E1952',
    marginBottom: '16.1px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      fontWeight: '600',
    },
  },
}));

export default useStyles;
