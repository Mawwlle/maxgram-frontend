import React from 'react';
import Input from '../../shared/ui/input';
import Label from '../../shared/ui/label/label';
import { UseFormRegister, Merge, FieldValues, FieldError, FieldErrorsImpl } from 'react-hook-form';
import './style.css';

interface IProps {
    title?: string;
    placeholder?: string | undefined;
    defaultValue?: string | undefined;
    className?: string | undefined;
    type?: string | undefined;
    name?: string | undefined;
    register: UseFormRegister<FieldValues>;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    required?: boolean | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
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