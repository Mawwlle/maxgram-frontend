import './style/style.css';
import SidebarButton from './ui/sidebarButton';
import Logo from '../../icons/logo.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { remove } from '../../store/user';
import { openModal } from '../../store/modal';

const Sidebar = () => {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(remove());
  };

  const onClickPost = () => {
    dispatch(openModal('post'));
  };

  return (
    <div className={'sidebar__container'}>
      <div className={'sidebar__logo'}>
        <img src={Logo} alt="logo" />
        {'Maxgram'}
      </div>
      <div className={'sidebar__profile'}>
        <img src="https://www.svgrepo.com/show/62649/penis.svg" alt="avatar" className={'sidebar__profile-avatar'} />
        <h3>{user.user?.first_name} {user.user?.last_name}</h3>
        <span>@{user.user?.username}</span>
        {/* <div className={'sidebar__profile__info'}>
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
        </div> */}
      </div>
      <div className={'sidebar__create'}>
        <button className={'sidebar__create__button'} onClick={onClickPost}>
          Post
        </button>
      </div>
      <div className={'sidebar__controls'}>
        <div className={'sidebar__controls__nav'}>
          <SidebarButton name={'Feed'} path={'feed'} />
          {/* <SidebarButton name={'Explore'} path={'explore'} /> */}
          <SidebarButton name={'Settings'} path={'settings'} />
        </div>
        <div className={'sidebar__controls__logout'}>
          <div className={'sidebar__controls__logout-separator'} />
          <SidebarButton name={'Log Out'} onClick={onClickLogout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
