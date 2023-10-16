import React from 'react';

import Icon from './';

export default Icon((props) => {
    const stopColor = props.theme === 'light'
        ? '#fff'
        : props.theme === 'pink' ? '#ff5487' : '#dadada';

    return (
        <React.Fragment>
            <circle fill="transparent" stroke="url(#gradient)" cx="50" cy="50" r="35" />
            <linearGradient id="gradient">
                <stop offset="25%" stopColor={stopColor} stopOpacity="1" />
                <stop offset="50%" stopColor={stopColor} stopOpacity=".5" />
                <stop offset="100%" stopColor={stopColor} stopOpacity="0" />
            </linearGradient>
        </React.Fragment>
    );
}, {
    viewBox  : '0 0 100 100',
    width    : 100,
    height   : 100,
    className: 'svg-icon_loader'
});
