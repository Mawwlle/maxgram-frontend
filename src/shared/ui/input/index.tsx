import './style.css';

interface IProps {
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    type?: string;
}

const Input = (props: IProps) => {
    return (
        <input type={props.type ? props.type : 'text'} className={`ui-input ${props.className}`} defaultValue={props.defaultValue} placeholder={props.placeholder} />
    )
}

export default Input;