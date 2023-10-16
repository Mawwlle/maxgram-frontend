import '../style/style.css';
import InputField from '../../../entities/inputField';
import Button from '../../../shared/ui/button';
import { useForm, FieldValues } from 'react-hook-form';
import api from '../../../api';
import { useAppSelector } from '../../../store/hooks';

interface IProps {
    onClickSave: (text: string) => void;
}

const UserPassword = (props: IProps) => {
    const user = useAppSelector((store) => store.user.user);

    const {
        register,
        handleSubmit,
        resetField,
        setError,
        formState: { errors, isValid }
    } = useForm();
    
    const onClickChangePassword = (data: FieldValues) => {
        if (data.password !== data.repeat_password) {
            setError('repeat_password', {
                type: 'manual',
                message: 'Passwords must be similar'
            });
        }

        if (isValid && data.password === data.repeat_password) {
            const params = {
                password: data.password
            };

            api.users.partialUpdateUser(Number(user?.id), params)
                .then((resp) => {
                    console.log('changes saved', resp.data);
                    props.onClickSave('Changed'); 
                    resetField('password');
                    resetField('repeat_password');
                })
                .catch((e) => {
                    console.warn('something went wrong', e);
                });
       
        }
    };

    return (
        <>
            <h2>Change password</h2>
            <form onSubmit={handleSubmit((data) =>  onClickChangePassword(data))}>
                <InputField
                    register={register}
                    required={true}
                    minLength={8}
                    error={errors.password?.message}
                    name={'password'}
                    type={'password'}
                    title='Enter new password' 
                    placeholder='Enter new password'
                    className={'settings__container__field'} 
                />
                <InputField
                    register={register}
                    required={true}
                    minLength={8}
                    error={errors.repeat_password?.message}
                    name={'repeat_password'}
                    type={'password'}
                    title='Repeat new password' 
                    placeholder='Repeat new password' 
                    className={'settings__container__field'} 
                />
                <Button 
                    title='Change' 
                    type={'submit'} 
                    className={'settings__container__submit'}
                />
            </form>
        </>
    );
};

export default UserPassword;