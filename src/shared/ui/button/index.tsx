import './style.css';

interface IProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  return (
    <button onClick={props.onClick} className={`ui-button ${props.className}`}>
      {props.title}
    </button>
  )
}

export default Button;