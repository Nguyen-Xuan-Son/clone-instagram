import React from 'react';
import { makeStyles } from '@material-ui/core';
import { IconComponent } from '../../../utils/components/icon';
import { avatar } from './../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    marginBottom: 36,
    background: '#fff',
    borderRadius: 4,
    border: '1px solid #dbdbdb',
    width: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  headerLeftAvatar: {
    '& img': {
      height: 32,
      width: 32,
      borderRadius: '50%',
    }
  },
  headerLeftUsername: {
    paddingLeft: 10,
    color: '#262626',
    fontWeight: 600,
    textTransform: 'inherit',
    textOverflow: 'ellipsis',
  },
  headerRight: {},
  headerRightIcon: {},
  body: {
    width: 'inherit',
    '& img': {
      height: 'auto',
      width: 'inherit',
    }
  },
  contentWrapper: {
    padding: 16,
  },
  actionContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  leftActionContent: {
    display: 'flex',
    alignItems: 'center',
    '& :not(:first-child)': {
      marginLeft: 15,
    },
    '& div': {
      cursor: 'pointer'
    }

  },
  rightActionContent: {
    '& div': {
      cursor: 'pointer'
    }
  },
  likeContent: {
    cursor: 'pointer',
    color: '#262626',
    fontWeight: 600,
    fontSize: 14,
  },
}))
export const PostItemComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>

      <div className={classes.header}>

        <div className={classes.headerLeft}>
          <div className={classes.headerLeftAvatar}>
            <img src={avatar} alt={avatar + " abc"} />
          </div>
          <div className={classes.headerLeftUsername}>
            chamdev.com
          </div>
        </div>

        <div className={classes.headerRight}>
          <IconComponent coordinatesX={226} coordinatesY={50} />
        </div>
      </div>

      <div className={classes.body}>
        <img src={avatar} alt={avatar + " abc"} />
      </div>

      <div className={classes.contentWrapper}>
        <div className={classes.actionContent}>
          <div className={classes.leftActionContent}>
            <div><IconComponent coordinatesX={122} coordinatesY={76} /></div>
            <div><IconComponent coordinatesX={70} coordinatesY={102} /></div>
            <div><IconComponent coordinatesX={408} coordinatesY={78} /></div>
          </div>
          <div className={classes.rightActionContent}>
            <div>
              <IconComponent coordinatesX={26} coordinatesY={368} />
            </div>
          </div>
        </div>

        <div className={classes.likeContent}>300 likes</div>
      </div>
    </div>
  );
}
