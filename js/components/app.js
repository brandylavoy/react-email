import React from 'react';
import {Link} from 'react-router';

export default function App(props) {
    return (
        <div>
            <h1>
                Emails App
            </h1>
            <ul>
                <li><Link to = { '/inbox' } >Inbox</Link></li>
                <li><Link to = { '/spam' } >Spam</Link></li>
            </ul>
            <div>
                {props.children}
            </div>
        </div>
    );
};
