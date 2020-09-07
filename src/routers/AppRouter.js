import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
  

export const AppRouter = () => {

    const dispatch = useDispatch();
    

    const {checking,uid} = useSelector(state => state.auth);//uid esta contante de los cambios
    
    //console.log(checking);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if (checking) {
        
        return (<h5> Espere ...... </h5>)
    }

    return (
            
        <Router>
            <div>
               <Switch>
                    {/*    component={LoginScreen} */}
                    <PublicRoute 
                         exact 
                         path="/login" 
                         component={LoginScreen}
                         isAuthenticated={!!uid} //!String = false  !!string=true __ !!null=false
                    />
                        
                    <PrivateRoute 
                        path="/" 
                        component={CalendarScreen}
                        isAuthenticated={!!uid} //!String = false  !!string=true __ !!null=false

                    />
                        
                    <Redirect to="/"/>
              
                </Switch>
            </div>
        </Router>
    )
}
