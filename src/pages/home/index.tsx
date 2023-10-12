import { Link } from 'react-router-dom';
import Button from '../../shared/ui/button';
import './style.css';

const Home = () => {
    return (
        <div className={'home'}>
            <div className={'home__content'}>
                <h1>Welcome to Maxgram</h1>
                <h3>Service to post, share and explore photos</h3>
                <h5>To start using service please sign in firstly</h5>
                <Link to={'/sign'}>
                    <Button title={'Sign Up'} className={'home__button'}/>
                </Link>
            </div>
        </div>
    )
}

export default Home;
