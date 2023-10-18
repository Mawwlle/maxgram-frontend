import React, { ReactElement, Fragment } from 'react';

export interface IPayload {
    // tslint:disable-next-line no-any
    [key: string]: any
}

export const baseProps = {
    xmlns  : 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width  : 24,
    height : 24,
};

export default (children: (payload: IPayload) => ReactElement, optionsProps?: {}) => {
    return (props: IPayload = {}) => {
        return (
            <Fragment>
                <svg  {...baseProps} {...optionsProps} {...props}>
                    {children(props)}
                </svg>
            </Fragment>
        );
    };
};
