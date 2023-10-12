import { Link } from 'react-router-dom';
import './style.css';

interface IProps {
    name: string;
    path: string;
}

const SidebarButton = (props: IProps) => {

    return (
        <Link to={`/${props.path}`} className={'sidebar__button'}>
            {props.name}
        </Link>
    )
}

export default SidebarButton;