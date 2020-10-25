import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ( { title, imageUrl, size, history, match,  linkUrl } ) => (
    <div style={{
       backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div class="content">
            <h2 className="title">
                {title}
            </h2>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);