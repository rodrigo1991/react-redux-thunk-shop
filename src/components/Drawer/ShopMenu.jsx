/* eslint-disable no-param-reassign */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GamesIcon from '@material-ui/icons/Games';
import ComputerIcon from '@material-ui/icons/Computer';
import StoreIcon from '@material-ui/icons/Store';
import GamepadIcon from '@material-ui/icons/Gamepad';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import List from '@material-ui/core/List';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import axios from 'axios';

const SegalMenu = () => {
  const history = useHistory();
  axios.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    err => {
      if (err.response.status === 401) {
        history.push('/');
        return Promise.reject(err);
      }
      return Promise.reject(err);
    }
  );

  return (
    <>
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItem>
        <ListItem button onClick={() => history.push('/games')}>
          <ListItemIcon>
            <GamesIcon />
          </ListItemIcon>
          <ListItemText primary="Games" />
        </ListItem>
        <ListItem button onClick={() => history.push('/computers')}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Computers" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader inset>Sony</ListSubheader>
        <ListItem button onClick={() => history.push('/ps4')}>
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="PS4" />
        </ListItem>
        <ListItem button onClick={() => history.push('/ps5')}>
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="PS5" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader inset>Microsoft</ListSubheader>
        <ListItem button onClick={() => history.push('/xone')}>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Xbox one" />
        </ListItem>
        <ListItem button onClick={() => history.push('/xboxseries')}>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Xbox series" />
        </ListItem>
      </List>
    </>
  );
};
export default SegalMenu;
