import React, { forwardRef } from 'react';
import LoaderIcon from '../../../icons/loader';
import './style.css';

interface IProps {
    className?: string,
    theme?: 'gray' | 'light' | 'pink',
    text?: string
}
// tslint:disable-next-line:no-any
const Loader = forwardRef<any, IProps>((props, ref) => {
    const params = {
        className: `loader ${props.className}`,
        ref
    };

    return (
        <div {...params}>
            <LoaderIcon theme={props.theme} />
            <span className={`loader__text-${props.theme}`}>
                {props.text || 'Загрузка...'}
            </span>
        </div>
    );
});

Loader.defaultProps = {
    theme: 'gray'
};

export default Loader;
