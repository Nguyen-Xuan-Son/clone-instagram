import React from 'react';
import { makeStyles } from '@material-ui/core';

import { NavbarHomeComponent  } from './navbar/index';
import { HomeComponent } from './home/index';

const useStyle = makeStyles(theme => ({
  contentWrapper: {
    width: '100%',
    position: 'absolute',
    top: 55,
    display: 'flex',
    justifyContent: 'center',
    background: '#fafafa',
  }
}))
export const PrivateComponent = () => {
  const classes = useStyle();

  return (
    <div>
      <NavbarHomeComponent />

      <div className={classes.contentWrapper}>
        <HomeComponent />
      </div>
    </div>
  );
}
