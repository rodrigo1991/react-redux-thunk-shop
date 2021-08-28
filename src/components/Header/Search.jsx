import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import useStyles from './searchStyle';

const Search = () => {
  const classes = useStyles();
  const history = useHistory();
  const [rut, setRut] = useState();
  const handleSearch = e => {
    if (e.keyCode === 13) {
      if (!rut) {
        history.push('/');
      } else {
        const srut = rut.replace(/\./g, '').replace('-', '');
        history.push(`/${srut}`);
      }
    }
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={rut}
        placeholder="I'm shopping for…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        autoFocus
        onKeyDown={handleSearch}
        onChange={e => setRut(e.target.value)}
      />
    </div>
  );
};
export default Search;
