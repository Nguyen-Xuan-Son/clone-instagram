import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {getStorageStringByKey} from "../utils/storage";

const publicRouteConfig = ({component, ...rest}: {component: any}) => {
    // TODO
    return (
        <Route
            { ...rest }
            render={(props) => {
                if (true) {
                    return <Redirect to={ { pathname: '/' } }/>;
                }

                return (
                    <Component {...props} />
                )
            }}
        />
    )
};

export default publicRouteConfig;
