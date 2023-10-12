import Input from '../../shared/ui/input'
import Label from '../../shared/ui/label/label'

interface IProps {
    title?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    type?: string;
}

const InputField = (props: IProps) => {
    return (
        <div className={props.className}>
            {props.title && <Label title={props.title} />}
            <Input type={props.type} placeholder={props.placeholder} defaultValue={props.defaultValue} />
        </div>
    )
}

export default InputField;