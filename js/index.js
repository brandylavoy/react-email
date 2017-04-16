require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import EmailListContainer from './components/email-list-container';
import App from './components/app';
import EmailContainer from './components/email-container';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute to="/inbox"/>
                <Route path=":emailListId" component={EmailListContainer}>
                    <Route path=":emailId" component={EmailContainer} />
                </Route>
        </Route>
    </Router>
);
document.addEventListener('DOMContentLoaded', () =>
        ReactDOM.render(routes, document.getElementById('app'))
);
