import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme';
import {hot} from 'react-hot-loader';
import MainRouter from './MainRouter';
import { AppBar, Grid, Toolbar } from '@material-ui/core';

const App=()=>{
    React.useEffect(()=>{
        const jssStyles=document.querySelector('#jss-server-side');
        if(jssStyles)
            jssStyles.parentNode.removeChild(jssStyles);
    },[]);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}


export default hot(module)(App);
