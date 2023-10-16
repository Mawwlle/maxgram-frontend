import { Link } from 'react-router-dom';
import InputField from '../../entities/inputField';
import Button from '../../shared/ui/button';
import './style.css';
import React, { useMemo, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import api from '../../api';
import { CreateUserData } from '../../api/users/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../store/hooks';
import { set } from '../../store/user';

const Sign = () => {
    const dispatch = useAppDispatch();
    const [isSign, setIsSign] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onClickSignUp = (data: FieldValues) => {
        const params: CreateUserData = {
            username: data.username,
            password: data.password
        };
        if (isSign) {
            api.token.createToken(params)
                .then((resp) => {
                    localStorage.setItem('access_token', resp.data.access);
                    localStorage.setItem('refresh_token', resp.data.refresh);

                    setTimeout(() => {
                        api.users.getSelfUser()
                            .then((resp) => {
                                dispatch(set(resp.data));
                            })
                            .catch((e) => {
                                console.warn(e);
                            });
                        console.log('true', resp.data);
                    }, 300)
                })
        } else {
            api.users.createUser(params)
                .then((resp) => {
                    setIsSuccess(true); 
                    console.log(resp.data);
                })
                .catch((e) => {
                    console.warn(e);
                });
        }
    };

    const elSignSuccess = useMemo(() => {
        const onClickSigning = () => {
            setIsSuccess(false);
            setIsSign(true);
        };

        return (
            <div className={'sign__container__success'}>
                <h3>Вы успешно зарегистрировались!</h3>
                <p onClick={onClickSigning}>Перейти на страницу авторизации</p>
            </div>
        )
    }, []);

    return (
        <div className={'sign'}>
            <div className={'sign__container'}>
                {isSuccess ? 
                elSignSuccess
                   : 
                <>
                    <div className={'sign__container__controls'}>
                        {isSign ?
                        <h3>Sign In</h3>
                        :
                        <h3>Sign Up</h3>
                        }
                        <Link to={'/'} className={'sign__container__controls-link'}>
                            <FontAwesomeIcon icon={faArrowLeft} className={'sign__container__controls-link-icon'} />
                            {'back'}
                        </Link>
                    </div>
                    <div className={'sign__container__switch'}>
                        {isSign ?
                            <>
                                <p>Don't have account yet?</p>
                                <span onClick={() => setIsSign((prev) => !prev)}>Sign Up</span>
                            </>
                        :
                            <>
                                <p>Already have account?</p>
                                <span onClick={() => setIsSign((prev) => !prev)}>Sign In</span>
                            </>
                        }
                    </div>
                    <form onSubmit={handleSubmit((data) => onClickSignUp(data))}>
                        <InputField 
                            register={register}
                            required={true}
                            minLength={4}
                            error={errors.username?.message}
                            name={'username'} 
                            title={'Username'} 
                            placeholder={'Enter username'} 
                            className={'sign__container__field'} 
                        />
                        <InputField 
                            register={register} 
                            required={true}
                            minLength={8}
                            error={errors.password?.message}
                            name={'password'} 
                            title={'Password'} 
                            type={'password'} 
                            placeholder={'Enter password'} 
                            className={'sign__container__field'} 
                        />
                        {isSign ?
                            <Button title={'Sign In'} type={'submit'} className={'sign__container__submit'} />
                        :
                            <Button title={'Sign Up'} type={'submit'} className={'sign__container__submit'} />
                        }
                    </form>
                </>
                }
            </div>
        </div>
    )
}

export default Sign;