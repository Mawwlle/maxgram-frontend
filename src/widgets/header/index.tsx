import './style/style.css';
import Logo from '../../icons/logo.svg';

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__logo'}>
                <img src={Logo} alt="logo" />
                {'Maxgram'}
            </div>
        </header>
    );
};

export default Header;