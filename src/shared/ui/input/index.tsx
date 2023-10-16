import './style.css';
import { UseFormRegister, Merge, FieldValues, FieldError, FieldErrorsImpl } from 'react-hook-form';

interface IProps {
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    type?: string;
    name?: string;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const Input = (props: IProps) => {
    return (
        <input 
            {...props.register(`${props.name}`, {
                required: props.required,
                minLength: {
                    value: props.minLength ? props.minLength : 0,
                    message: `Required ${props.minLength} characters`
                }
            })} 
            name={props.name} 
            type={props.type ? props.type : 'text'} 
            className={`ui-input ${props.className} ${props.error && 'ui-input-error'}`} 
            defaultValue={props.defaultValue || ''} 
            placeholder={props.placeholder}
            autoComplete={props.type === 'password' ? 'new-password' : undefined}
        />
    )
}

export default Input;