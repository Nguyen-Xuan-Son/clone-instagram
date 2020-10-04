import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { logoInstagramText, tempAccount } from '../../../assets/images';
import { IconComponent } from '../../../utils/components/icon';

const useStyle = makeStyles(theme => ({
  root: {
    height: 54,
    background: '#fff',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(var(--b6a,219,219,219),1)',
    position: 'fixed',
    width: '100%',
    zIndex: 1001,
  },
  navbarWrapper: {
    width: 935,
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  logoTextContainer: {
    flex: 1,
    '& img': {
      cursor: 'pointer',
    }
  },
  inputContainer: {
    minWidth: 125,
    width: 215,
    height: 28,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& input': {
      width: 'inherit',
      height: 'inherit',
      borderRadius: 3,
      padding: 0,
      border: 'solid 1px rgba(var(--b6a,219,219,219),1)',
    }
  },
  actionsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      '& div': {
        cursor: 'pointer',
      }
    },
    '& :not(:first-child)': {
        marginLeft: 22,
    }
  },
  avatar: {
    height: 24,
    width: 24,
    cursor: 'pointer',
  }
}));

export const NavbarHomeComponent = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.navbarWrapper}>

          <div className={classes.logoTextContainer}>
            <img src={logoInstagramText} alt={logoInstagramText + "logo"}/>
          </div>

          <div className={classes.inputContainer}>
            <input
              placeholder="Search"
            />
          </div>

          <div className={classes.actionsContainer}>
            <div>
              <IconComponent
                coordinatesX={96}
                coordinatesY={76}
                size={24}
              />
            </div>
            <div>
              <IconComponent
                coordinatesX={-52}
                coordinatesY={77}
                size={24}
              />
            </div>
            <div>
              <IconComponent
                coordinatesX={581}
                coordinatesY={49}
                size={24}
              />
            </div>
            <div>
              <IconComponent
                coordinatesX={122}
                coordinatesY={75}
                size={24}
              />
            </div>
            <div>
              <img className={classes.avatar} src={tempAccount} alt={tempAccount + "image"}/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
