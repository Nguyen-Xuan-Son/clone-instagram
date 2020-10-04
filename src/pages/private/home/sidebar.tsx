import React from 'react';
import { makeStyles } from '@material-ui/core';
import { avatar, tempAccount } from '../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
  },
  infoAccount: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
    marginBottom: 10,
    marginTop: 18,
  },
  avatar: {
    '& img': {
      width:  56,
      height:  56,
      borderRadius: '50%',
      cursor: 'pointer',
    }
  },
  usernameInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },
  username: {
    fontWeight: 600,
    color: '#262626',
    cursor: 'pointer',
  },
  nickname: {
    fontSize: 12,
    lineHeight: '18px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  suggestionsText: {
    color: '#8e8e8e',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '18px',
    margin: '-3px 0 -4px',
  },
  seeAllText: {
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '14px',
    cursor: 'pointer',
    margin: '-2px 0 -3px',
  },
  suggestionsWrapper: {
    paddingTop: 10,
  },
  suggestionItem: {
    padding: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSuggestionItem: {
    display: 'flex',
  },
  avatarSuggestionItem: {
    borderRadius: '50%',
    '& img': {
      width:  32,
      height:  32,
      borderRadius: '50%',
      cursor: 'pointer',
    }
  },
  infoSuggestion: {
    paddingLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  usernameInfoSuggestion: {
    color: '#262626',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    fontSize: 14,

  },
  shortcutInfoSuggestion: {
    fontSize: 12,
    paddingTop: 3,
    color: '#8e8e8e',
  },
  followAction: {
    fontWeight: 600,
    fontSize: 12,
    margin: '-2px 0 -3px',
    color: '#0095f6',
    cursor: 'pointer',
  },
  footer: {
    marginTop: 20,
    color: '#c7c7c7',
    fontSize: 11,
    fontWeight: 400,
    lineHeight: '13px',
  },
  footerSubService: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > div': {
      cursor: 'pointer',
      '&:after': {
        content: "'\\00B7'",
        margin: '0 .25em 0 .25em',
      },
    },
    '& :last-child': {
      '&:after': {
        content: "''",
        margin: 0,
      },
    }
  },
  footerCopyRight: {
    marginTop: 15,
    textTransform: 'uppercase',
  },
}))
export const SidebarComponent = () => {
  const classes = useStyle();

  const SuggestionItem = (props: any) => {
    return (
      <div className={classes.suggestionItem}>
        <div className={classes.leftSuggestionItem}>
          <div className={classes.avatarSuggestionItem}>
            <img src={avatar} alt={tempAccount + "image"}/>
          </div>

          <div className={classes.infoSuggestion}>
            <div className={classes.usernameInfoSuggestion}> Nguyen Thi Hoa </div>
            <div className={classes.shortcutInfoSuggestion}> Shuka </div>
          </div>
        </div>

        <div className={classes.followAction}>Follow</div>
      </div>
    )
  };

  return (
    <div className={classes.root}>

      <div className={classes.infoAccount}>
        <div className={classes.avatar}>
          <img src={avatar} alt={tempAccount + "image"}/>
        </div>
        <div className={classes.usernameInfo}>
          <div className={classes.username}>chamdev</div>
          <div className={classes.nickname}>nguyen.xuan.son</div>
        </div>
      </div>

      <div className={classes.header}>
        <div className={classes.suggestionsText}>Suggestions For You</div>
        <div className={classes.seeAllText}>See All</div>
      </div>

      <div className={classes.suggestionsWrapper}>
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </div>

      <div className={classes.footer}>
        <div className={classes.footerSubService}>
          <div>About</div>
          <div>Help</div>
          <div>Press</div>
          <div>API</div>
          <div>Jobs</div>
          <div>Privacy</div>
          <div>Terms</div>
          <div>Locations</div>
          <div>Top Accounts</div>
          <div>Hashtags</div>
          <div>Language</div>
        </div>
        <div className={classes.footerCopyRight}>
          © 2020 Instagram Clone from chamdev.com
        </div>
      </div>
    </div>
  );
}
