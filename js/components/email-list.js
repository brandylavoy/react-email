
// js/components/email-list.js
// creates list of emails
import React from 'react';
import MAILLIST from '../emails';
import Email from  './email';

export default function EmailList(props) {
    console.log(props);
    const emails = Object.keys(MAILLIST[props.emailListId]).map((emailId, index) => {
        const email = MAILLIST[props.emailListId][emailId];
        return (
            <li key={index}>
                <Email id={email.id} from={email.from} to={email.to} content={email.content} title={email.title} emailListId={props.emailListId}/>
            </li>
        );
    });

    return (
        <div>
            <ul className="inbox-emails">
                {emails}
            </ul>
        </div>
    );
}
