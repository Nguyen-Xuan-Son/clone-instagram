import { makeStyles } from '@material-ui/core';
import React from 'react';
import { avatar } from '../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    background: '#fff',
    height: 118,
    border: '1px solid rgba(var(--b6a,219,219,219),1)',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 36,
  },
  wrapperStories: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: "0 10px",
    overflowX: 'hidden',
  },
  storyItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 10px",
    maxWidth: 74,
  },
  storyItemImage: {
    height: 66,
    width: 66
  },
  storyItemImageBorder: {
    background: 'linear-gradient(245deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%)',
    height: 'inherit',
    width: 'inherit',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      height: 56,
      width: 56,
      padding: 2,
      background: '#fff',
      borderRadius: '50%'
    }
  },
  storyItemName: {
    fontSize: 12,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: 'inherit',
    lineHeight: 'normal',
  }
}))

// Mock image

const data = [
  {
    username: "yyyguyen thi luy nguyen thi luy",
    image: avatar
  },
  {
    username: "nguyen thi hoa",
    image: avatar
  },
  {
    username: "nguyen thi huy",
    image: avatar
  },
  {
    username: "nguyen thi loan",
    image: avatar
  },
  {
    username: "tony nguyen",
    image: avatar
  },
  {
    username: "shiba",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  },
  {
    username: "sita",
    image: avatar
  }
];

export const StoriesComponent = () => {
  const classes = useStyle();

  const StoryItemComponent = (props: any) => {
    return (
      <div className={classes.storyItemContainer}>
        <div className={classes.storyItemImage}>
          <div className={classes.storyItemImageBorder}>
            <img
              src={props.story.image}
              alt={props.story.image + ":avatar"}
            />
          </div>
        </div>

        <div className={classes.storyItemName}>{props.story.username}</div>
      </div>
    )
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapperStories}>
        {data.map((story, index) => {
          return (
            <React.Fragment key={index}>
              <StoryItemComponent story={story} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
}
