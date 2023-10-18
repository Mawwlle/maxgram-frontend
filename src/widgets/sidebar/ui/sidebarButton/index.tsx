import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface IProps {
    name: string;
    path?: string;
    onClick?: () => void;
}

const SidebarButton = (props: IProps) => {
    if (props.path) {
        return (
            <Link to={`/${props.path}`} className={'sidebar__button'}>
                {props.name}
            </Link>
        );
    }

    if (props.onClick) {
        return (
            <button onClick={props.onClick} className={'sidebar__button__logout'}>
                {props.name}
            </button>
        )
    }

    return null;
}

export default SidebarButton;