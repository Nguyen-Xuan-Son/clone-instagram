import React from 'react';
import { makeStyles } from '@material-ui/core';
import { icons } from '../../../assets/images';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: 36,
  },
  gettingStartedContainer: {
    height: 239,
    marginTop: 12,
    display: 'flex',
    overflowX: 'hidden',
  },
  label: {
    fontWeight: 600,
    fontSize: 14,
    marginTop: 12,
  },
  getStartedItemWrapper: {
    display: 'flex',
    width: 250,
    minWidth: 250,
    height: 237,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 4,
    border: '1px solid #dbdbdb',
    background: '#fff',
    marginRight: 10,
  },
  itemIconWrapper: {
    borderRadius: '50%',
    border: '1px solid #262626',
  },
  itemIcon: {
    backgroundImage: `url(${icons})`,
    height: 24,
    width: 24,
    margin: 15,
  },
  itemLabel: {
    fontWeight: 600,
    fontSize: 16,
    color: '#262626',
  },
  itemDescription: {
    color: '#8e8e8e',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    textAlign: 'center',
  },
  itemButton: {
    '& button': {
      background: '#0095f6',
      borderRadius: 4,
      border: '1px solid #00000000',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 600,
      padding: '5px 9px',
      textAlign: 'center',
      fontSize: 14,
      lineHeight: '18px',
    }
  },
}));

// TODO
// Mock data 
const data = [
  {
    label: 'Find Facebook Friends',
    description: 'You choose which friends to follow. We\'ll never post to Facebook without your permission.',
    textButton: 'Connect to Facebook',
    coordinatesX: '-182',
    coordinatesY: '-370',
  },
  {
    label: 'Find Facebook Friends',
    description: 'You choose which friends to follow. We\'ll never post to Facebook without your permission.',
    textButton: 'Connect to Facebook',
    coordinatesX: '0',
    coordinatesY: '-344',
  },
  {
    label: 'Find Facebook Friends',
    description: 'You choose which friends to follow. We\'ll never post to Facebook without your permission.',
    textButton: 'Connect to Facebook',
    coordinatesX: '-26',
    coordinatesY: '-344',
  },
  {
    label: 'Find Facebook Friends',
    description: 'You choose which friends to follow. We\'ll never post to Facebook without your permission.',
    textButton: 'Connect to Facebook',
    coordinatesX: '-26',
    coordinatesY: '-344',
  }
];
export const GettingStartedComponent = () => {
  const classes = useStyle();

  const GettingStartedItemComponent = (props: any) => {
    return (
      <div className={classes.getStartedItemWrapper}>
        <div className={classes.itemIconWrapper}>
          <div
            className={classes.itemIcon}
            style={{
              backgroundPosition: `${props.info.coordinatesX}px ${props.info.coordinatesY}px`
            }}
          ></div>
        </div>
        <div className={classes.itemLabel}>{props.info.label}</div>
        <div className={classes.itemDescription}>
          {props.info.description}
        </div>
        <div className={classes.itemButton}>
          <button>{props.info.textButton}</button>
        </div>
      </div>
    )
  };

  return (
    <div className={classes.root}>
      <div className={classes.label}>Getting Started</div>

      <div className={classes.gettingStartedContainer}>
        {data.map((item, index) => {

          return (
            <React.Fragment key={index}>
              <GettingStartedItemComponent info={item}/>
            </React.Fragment>
          )
        })}
      </div>
      
    </div>
  );
};
