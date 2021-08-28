import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Hidden, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import ShopMenu from './ShopMenu.jsx';
import MobileMenu from './MobileMenu.jsx';
import useStyles from './ShopDrawerStyle';
import { setMobileOpen, setOpen } from '../../redux/ducks/menu';

const ShopDrawer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector(state => state.menu.open);
  const mobileOpen = useSelector(state => state.menu.mobileOpen);

  const handleDrawerClose = () => {
    dispatch(setOpen(false));
    dispatch(setMobileOpen(false));
  };
  return (
    <>
      <Hidden smUp>
        <Drawer
          id={'mobile'}
          open={mobileOpen}
          variant={'temporary'}
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !mobileOpen && classes.drawerPaperClose
            )
          }}
          onClick={handleDrawerClose}
          modalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <div className={classes.toolbarIcon}>
            <Typography variant="body2">RRivero commerce</Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MobileMenu />
        </Drawer>
      </Hidden>

      <Hidden xsDown>
        <Drawer
          id={'desktop'}
          open={open}
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          variant={'permanent'}
        >
          <div className={classes.toolbarIcon}>
            <Typography variant="body2">RRivero commerce</Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <ShopMenu />
        </Drawer>
      </Hidden>
    </>
  );
};

export default ShopDrawer;
