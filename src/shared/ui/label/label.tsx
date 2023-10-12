import './style.css';

interface IProps {
    title: string;
}

const Label = (props: IProps) => {
    return (
        <label className={'ui-label'}>
            {props.title}
        </label>
    )
}

export default Label;