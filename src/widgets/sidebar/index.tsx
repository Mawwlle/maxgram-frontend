import React from 'react';
import './style/style.css';
import SidebarButton from './ui/sidebarButton';
// import Logo from '../../icons/logo.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { remove } from '../../store/user';
import LogoIcon from '../../icons/logo';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(remove());
  };

  const elColumnSidebar = () => {
    return (
      <div className={'sidebar__container'}>
        <div className={'sidebar__logo'}>
          <LogoIcon />
          {'Maxgram'}
        </div>
        <div className={'sidebar__profile'}>
          <h3>{user.user?.first_name} {user.user?.last_name}</h3>
          <span>@{user.user?.username}</span>
        </div>
        <div className={'sidebar__create'}>
          <Link to={'/post'} className={'sidebar__create__button'}>
            Post
          </Link>
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

  const elRowSidebar = () => {
    return (
      <div className={'row__sidebar__container'}>
          <div className={'row__sidebar__logo'}>
            <LogoIcon />
            {'Maxgram'}
          </div>
          <div className={'row__sidebar__controls'}>
            <div className={'row__sidebar__controls__nav'}>
              <Link to={'/post'} className={'row__sidebar__create__button'}>
                Post
              </Link>
              <SidebarButton name={'Feed'} path={'feed'} />
              <SidebarButton name={'Settings'} path={'settings'} />
            </div>
            <div className={'row__sidebar__controls__logout'}>
              <SidebarButton name={'Log Out'} onClick={onClickLogout} />
            </div>
          </div>
      </div>
    );
  };

  return (
    <>
      {elColumnSidebar()}
      {elRowSidebar()}
    </>
  );
};

export default Sidebar;
