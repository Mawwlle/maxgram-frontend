import React from 'react';
import { defaultProps } from './base';
import { IProps } from './types';

const PaperclipIcon = (props: IProps) => (
    <svg {...defaultProps} {...props} viewBox="0 0 32 32" fill="none">
        <path d="M2.098 5.903c1.309-1.309 3.050-2.030 4.902-2.030v0c1.852 0 3.593 0.721 
            4.902 2.030l14.035 14.036c1.87 1.87 1.87 4.913 0 6.783-0.906 0.907-2.11 1.405-3.392 
            1.405s-2.486-0.499-3.392-1.405l-6.197-6.196 0.005-0.005-7.407-7.408c-0.503-0.502-0.78-1.171-0.78-1.881 0-0.711 0.277-1.379 
            0.78-1.882 0.502-0.502 1.17-0.78 1.881-0.78s1.379 0.278 1.881 0.78l11.871 11.87-0.742 
            0.742-11.871-11.87c-0.609-0.608-1.67-0.608-2.278 0-0.304 0.304-0.472 0.709-0.472 1.14s0.168 
            0.835 0.472 1.139l13.598 13.609c0.708 0.709 1.648 1.098 2.65 1.098s1.942-0.389 
            2.65-1.098c1.461-1.461 1.461-3.839 0-5.3l-14.035-14.036c-1.112-1.111-2.589-1.723-4.16-1.723s-3.049 
            0.612-4.16 1.723c-1.111 " 
            fill="#000000" />
    </svg>
);

export default PaperclipIcon;