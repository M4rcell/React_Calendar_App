import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

    export const PrivateRoute = ({
        isAuthenticated,
        component:Component,
        ...rest // todo el resto
    }) => {


    return (
        <Route {...rest}
          component={(props)=>(//props = como history ,location , params
            
            (isAuthenticated)
                ?(<Component {...props}/>) //si esta autetificado manda todo los props
                :(<Redirect to="/login" />)
              
          )}
        />
    )
}

PrivateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}
