import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import MoreIcon from '@material-ui/icons/MoreVert';
import { AccountCircle } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import MenuIcon from '@material-ui/icons/Menu';

import { Hidden, Tooltip } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './headerStyle';
import { setMobileOpen, setOpen } from '../../redux/ducks/menu';
import Search from './Search.jsx';
import { removeUser } from '../../redux/ducks/user';

const MainBar = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const open = useSelector(state => state.menu.open);
  const loggedUser = useSelector(state => state.user.loggedUser);
  const mobileOpen = useSelector(state => state.menu.mobileOpen);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    dispatch(setOpen(true));
    dispatch(setMobileOpen(true));
  };
  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    dispatch(removeUser());
  };

  const cart = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push('/cart');
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {loggedUser ? (
        <>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </>
      ) : (
        <MenuItem
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </MenuItem>
      )}
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={cart}>
        <IconButton aria-label="show cart" color="inherit">
          <Badge badgeContent={products.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Mi cuenta</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {renderMobileMenu}
      {renderMenu}
      <Hidden xsDown>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              E-Commerce
            </Typography>
            <Search />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="Show cart">
                <IconButton
                  aria-label="show cart"
                  color="inherit"
                  onClick={cart}
                >
                  <Badge badgeContent={products.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Mi account">
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, mobileOpen && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                mobileOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              E-Commerce
            </Typography>
            <Search />
            <div className={classes.grow} />
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={products.length} color="secondary">
                  <MoreIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};
export default MainBar;
