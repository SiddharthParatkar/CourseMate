import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';

export default class Routes extends React.Component {
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key='login' component={LoginPage} hideNavBar={true} title='Log In'/>
                    <Scene key='signup' component={Signup} hideNavBar={true} title='Sign Up'/>
                </Stack>
            </Router>
        )
    }
}