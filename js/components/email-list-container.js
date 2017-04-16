import React from 'react';
import EmailList from './email-list';


export default function EmailListContainer(props) {
    const emailListId = props.params.emailListId;
    console.log(emailListId);
    if (props.children)
        return (props.children);
    else
        return (
            <EmailList emailListId={emailListId} />
        )
};
