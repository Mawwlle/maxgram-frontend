import './style.css'

interface IProps {
    children?: React.ReactNode
}

const Container = (props: IProps) => {
    return (
        <div className={'ui-container'}>
            {props.children}
        </div>
    )
}

export default Container;