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
import { useDispatch } from 'react-redux';
import { startChecking } from '../actions/auth';
  

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    return (
            
            <Router>
                <div>
                   <Switch>
                        {/*    component={LoginScreen} */}
                        <Route exact path="/login" component={LoginScreen}/>
                            
                        <Route path="/calendar" component={CalendarScreen}/>
                            
                        <Redirect to="/"/>
                  
                    </Switch>
                </div>
            </Router>
    )
}
