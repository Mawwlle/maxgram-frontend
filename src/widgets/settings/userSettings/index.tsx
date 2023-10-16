import '../style/style.css';
import InputField from '../../../entities/inputField';
import { useForm, FieldValues } from 'react-hook-form';
import Button from '../../../shared/ui/button';
import { useAppSelector } from '../../../store/hooks';
import api from '../../../api';

interface IProps {
    onClickSave: (text: string) => void;
}

const UserSettings = (props: IProps) => {
    const user = useAppSelector((store) => store.user.user);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm();

    const onClickSaveChanges = (data: FieldValues) => {
        if (isValid) {
            const params = {
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username
            };

            api.users.partialUpdateUser(Number(user?.id), params)
                .then((resp) => {
                    console.log('changes saved', resp.data);
                    props.onClickSave('Saved');
                })
                .catch((e) => {
                    console.warn('something went wrong', e);
                });
        }
    };

    return (
        <>
            <h2>User settings</h2>
            <form onSubmit={handleSubmit((data) => onClickSaveChanges(data))}>
                <InputField 
                    register={register}
                    name={'email'}
                    title='Email' 
                    placeholder='Enter email' 
                    defaultValue={user?.email}
                    className={'settings__container__field'} 
                />
                <InputField
                    register={register}
                    required={true}
                    minLength={4}
                    error={errors.username?.message}
                    name={'username'}
                    title='Username'
                    placeholder='Enter username'
                    defaultValue={user?.username}
                    className={'settings__container__field'}
                />
                <div>
                    <InputField
                        register={register}
                        name={'first_name'}
                        title='First Name'
                        placeholder='Enter first name'
                        defaultValue={user?.first_name}
                        className={'settings__container__field'}
                    />
                    <InputField
                        register={register}
                        name={'last_name'}
                        title='Last Name'
                        placeholder='Enter last name'
                        defaultValue={user?.last_name}
                        className={'settings__container__field'}
                    />
                </div>
                <div>
                    <Button
                        title='Save changes'
                        type={'submit'}
                        className={'settings__container__submit'}
                    />
                </div>
            </form>
        </>
    );
};

export default UserSettings;