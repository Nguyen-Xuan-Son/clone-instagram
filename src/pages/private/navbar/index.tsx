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
    width: 215,
    height: 28,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    background: '#fafafa',
    '& input': {
      border: 'solid 1px #dbdbdb',
      borderRadius: 3,
      width: 'inherit',
      height: 'inherit',
      padding: '0px 10px 0px 26px',
      zIndex: 2,
      fontSize: 14,
      display: 'none'
    },
    '& input:focus': {
      zIndex: 3,
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
  },
  inputContainerPlaceholder: {
    position: 'absolute',
    height: 'inherit',
    border: 'solid 1px #dbdbdb',
    borderRadius: 3,
    background: '#fafafa',
    top: 0,
    left: 0,
    width: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8e8e8e',
    fontSize: 14,
    fontWeight: 300,
    zIndex: 2,
    '& div': {
      marginRight: 5,
    }
  },
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

            <div className={classes.inputContainerPlaceholder}>
              <IconComponent
                coordinatesX={207}
                coordinatesY={162}
                size={10}
              />
              <span>Search</span>
            </div>
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
