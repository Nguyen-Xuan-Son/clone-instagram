import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({component, ...rest}: {component: any}) => {
    // TODO
    return (
        <Route
            {...rest}
            render={(props: any) => {
                if (true) {
                    return <Redirect to={ { pathname: '/login' } }/>;
                }

                return (<Component {...props}/>)
            }}
        />
    )

};

export default privateRoute;
