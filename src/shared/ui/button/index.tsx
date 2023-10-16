import './style.css';

interface IProps {
  title: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  handleMouseOut?: () => void;
}

const Button = (props: IProps) => {
  return (
    <button 
      onClick={props.onClick}
      onMouseOut={props.handleMouseOut}
      type={props.type} 
      className={ `ui-button ${props.className}` }
    >
      {props.title}
    </button>
  )
}

export default Button;