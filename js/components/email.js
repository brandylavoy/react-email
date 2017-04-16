// js/components/email.js
// this holds the individual email information

import React from 'react';
import {Link} from 'react-router';

export default function Email(props) {
    console.log(props);
    return (
        <div>
            <strong>
               <Link to={'/' + props.emailListId + '/' + props.id}> subject: {props.title}
                </Link>
            </strong>
            &nbsp;
            <p> from:  {props.from} </p>
            <p> to:  {props.to} </p>
            <p> {props.content} </p>
        </div>
    );
};
