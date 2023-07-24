import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from '../themes/HeaderStyles';
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/twitter1.svg';
import linkedin from '../assets/images/linkedin1.svg';
import victory from '../assets/images/victory1.svg';

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.btnDiv}>
            <div className={classes.btnWrapper}>
              <Button disableTouchRipple className={classes.btn}>
                Product
              </Button>
              <Button disableTouchRipple className={classes.btnPricing}>
                Pricing
              </Button>
              <Button disableTouchRipple className={classes.btn}>
                Company
              </Button>
            </div>
          </div>
          <div className={classes.btnsDiv}>
            <Button disableTouchRipple className={classes.loginBtn}>
              Login
            </Button>
            <Button disableTouchRipple className={classes.signUpBtn}>
              Sign up for free
            </Button>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.menu, { [classes.hide]: open })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerClose}
            className={clsx(classes.menu, { [classes.hide]: !open })}
          >
            <ClearIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        className={classes.drawer}
        anchor="left"
        open={open}
        onChange={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <List className={classes.lists}>
          <ListItem button key="Product">
            <ListItemText primary="Product" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="Pricing">
            <ListItemText primary="Pricing" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="Company">
            <ListItemText primary="Company" className={classes.listBtn} />
          </ListItem>
          <ListItem button key="Login">
            <ListItemText primary="Login" className={classes.listBtn} />
          </ListItem>
          <ListItem>
            <Button className={classes.gettingStartedBtn} disableTouchRipple>
              Get Started
            </Button>
          </ListItem>
        </List>
        <div className={classes.socialDiv}>
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={victory} alt="victory" />
        </div>
        <Typography className={classes.email}>hello@templateondemand.co</Typography>
        <Typography className={classes.copyrights}>© 2021 Templateondemand.co.All Rights Reserved.</Typography>
      </Drawer>
    </div>
  );
};

export default Header;
