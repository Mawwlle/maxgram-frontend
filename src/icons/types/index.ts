import { MouseEvent } from 'react';

export interface IDefaultProps {
    xmlns: string,
    viewBox: string,
    width: number,
    height: number
}

export interface IProps extends Partial<IDefaultProps> {
    isRetina?: boolean,
    className?: string,
    onClick?(e: MouseEvent): void,
    isCrossed?: boolean,
    isLocked?: boolean,
    isActive?: boolean,
    title?: string
}