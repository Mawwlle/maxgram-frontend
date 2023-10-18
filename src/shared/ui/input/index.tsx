import React from 'react';
import './style.css';
import { UseFormRegister, Merge, FieldValues, FieldError, FieldErrorsImpl } from 'react-hook-form';

interface IProps {
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    className?: string | undefined;
    type?: string | undefined;
    name?: string | undefined;
    register: UseFormRegister<FieldValues>;
    required?: boolean | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const Input = (props: IProps) => {
    return (
        <input 
            {...props.register(`${props.name}`, {
                required: props.required || false,
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