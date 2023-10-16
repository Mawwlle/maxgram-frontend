import './style.css'

interface IProps {
    children?: React.ReactNode,
    className?: string;
}

const Container = (props: IProps) => {
    return (
        <div className={`ui-container ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container;