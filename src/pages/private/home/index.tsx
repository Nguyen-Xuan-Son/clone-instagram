import { makeStyles } from '@material-ui/core';
import React from 'react';

import { StoriesComponent } from './stories';
import { GettingStartedComponent } from './gettingStarted';
import { PostItemComponent } from './postItem';
import { SidebarComponent } from './sidebar';

const useStyle = makeStyles(theme => ({
  root: {
    width: 935,
    maxWidth: 935,
    paddingTop: 30,
  },
  content: {
    maxWidth: 614,
    width: '100%',
    float: 'left',
    marginRight: 28,
  },
  sidebar: {
    left: 1126,
    top: 88,
    maxWidth: 293,
    width: 293,
    position: 'fixed',
    height: '100vh',
  },
}))

export const HomeComponent = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <StoriesComponent />
        <GettingStartedComponent />

        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
        <PostItemComponent />
      </div>
      <div className={classes.sidebar}>
        <SidebarComponent />
      </div>
    </div>
  );
}
