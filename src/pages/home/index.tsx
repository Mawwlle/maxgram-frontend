import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/ui/button';
import './style.css';

const Home = () => {
    return (
        <div className={'home'}>
            <div className={'home__content'}>
                <h1>Автосалон</h1>
                <Link to={'/sign'}>
                    <Button title={'Зарегистрироваться'} className={'home__button'} />
                </Link>
            </div>
        </div>
    )
}

export default Home;
