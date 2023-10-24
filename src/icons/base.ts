import './style.css';

export const className = (classNameProp?: string): string => {
    return `svg-icon ${classNameProp}`;
};

export const defaultProps = {
    xmlns    : 'http://www.w3.org/2000/svg',
    viewBox  : '0 0 24 24',
    width    : 24,
    height   : 24,
    className: className()
};