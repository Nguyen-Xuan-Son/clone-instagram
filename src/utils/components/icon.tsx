import React from 'react';

import { makeStyles } from '@material-ui/core';
import { icons } from '../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${icons})`,
    
  }
}));

export const IconComponent = (props: any) => {
  const classes = useStyle();

  return (
    <div
      className={classes.root}
      style={{
        backgroundPosition: `${props.coordinatesX}px ${props.coordinatesY}px`,
        height: `${props.size || 24}px`,
        width: `${props.size || 24}px`,
      }}
    ></div>
  )
};
