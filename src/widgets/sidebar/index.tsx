import './style/style.css';
import SidebarButton from './ui/sidebarButton';
import Logo from '../../icons/logo.svg';

const Sidebar = () => {
  return (
    <div className={'sidebar__container'}>
      <div className={'sidebar__logo'}>
        <img src={Logo} alt="logo" />
        {'Maxgram'}
      </div>
      <div className={'sidebar__profile'}>
        <img src="https://www.svgrepo.com/show/62649/penis.svg" alt="avatar" className={'sidebar__profile-avatar'} />
        <h3>Max Gram</h3>
        <span>@maxgram</span>
        <div className={'sidebar__profile__info'}>
          <div className={'sidebar__profile__info-item'}>
            <div>
              100
            </div>
            <h6>posts</h6>
          </div>
          <div className={'sidebar__profile__info-item'}>
            <div>
              100
            </div>
            <h6>followers</h6>
          </div>
          <div className={'sidebar__profile__info-item'}>
            <div>
              100
            </div>
            <h6>following</h6>
          </div>
        </div>
      </div>
      <div className={'sidebar__controls'}>
        <div className={'sidebar__controls__nav'}>
          <SidebarButton name={'Feed'} path={'feed'} />
          {/* <SidebarButton name={'Explore'} path={'explore'} /> */}
          <SidebarButton name={'Settings'} path={'settings'} />
        </div>
        <div className={'sidebar__controls__logout'}>
          <div className={'sidebar__controls__logout-separator'} />
          <SidebarButton name={'Log Out'} path={'logout'} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
