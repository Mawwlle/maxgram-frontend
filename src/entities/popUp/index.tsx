import './style.css';

interface IProps {
    title: string;
}

const Popup = (props: IProps) => {
  return (
    <div className={`popup__modal`}>
        {props.title}
    </div>
  )
}

export default Popup;