import { Link } from 'react-router-dom';
import InputField from '../../entities/inputField';
import Button from '../../shared/ui/button';
import './style.css';
import { useState } from 'react';

const Sign = () => {
    const [isSign, setIsSign] = useState<boolean>(false);

    return (
        <div className={'sign'}>
            <div className={'sign__container'}>
                <div className={'sign__container__controls'}>
                    {isSign ?
                    <h3>Sign In</h3>
                    :
                    <h3>Sign Up</h3>
                    }
                    <Link to={'/'} className={'sign__container__controls-link'}>{'<-- back'}</Link>
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
                <InputField title={'Email'} type={'email'} placeholder={'Enter email'} className={'sign__container__field'} />
                <InputField title={'Password'} type={'password'} placeholder={'Enter password'} className={'sign__container__field'} />
                {isSign ?
                    <Button title={'Sign In'} className={'sign__container__submit'} />
                :
                    <Button title={'Sign Up'} className={'sign__container__submit'} />
                }
            </div>
        </div>
    )
}

export default Sign;