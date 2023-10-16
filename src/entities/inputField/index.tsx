import Input from '../../shared/ui/input';
import Label from '../../shared/ui/label/label';
import { UseFormRegister, Merge, FieldValues, FieldError, FieldErrorsImpl } from 'react-hook-form';
import './style.css';

interface IProps {
    title?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    type?: string;
    name?: string;
    register: UseFormRegister<FieldValues>;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}

const InputField = (props: IProps) => {
    return (
        <div className={`input-field ${props.className}`}>
            {props.title && <Label title={props.title} />}
            <Input 
                register={props.register}
                required={props.required}
                minLength={props.minLength}
                maxLength={props.maxLength}
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                defaultValue={props.defaultValue} 
                error={props.error}
            />
            {props.error && <span className={'input-field__span'}>{props.error.toString()}</span>}
        </div>
    );
};

export default InputField;