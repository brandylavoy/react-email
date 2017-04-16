import React from 'react';

import MAILLIST from '../emails';
import Email from './email';

export default function EmailContainer(props) {
    console.log(props.params);
    const email = MAILLIST[props.params.emailListId][props.params.emailId];
    return <Email id={email.id} from={email.from}
    to={email.to} content={email.content} title={email.title} />;
};
