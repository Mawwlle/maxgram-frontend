import React from 'react';
import './style/style.css';
import SidebarButton from './ui/sidebarButton';
import { useAppDispatch } from '../../store/hooks';
import { remove } from '../../store/user';
import LogoIcon from '../../icons/logo';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    dispatch(remove());
  };

  const elColumnSidebar = () => {
    return (
      <div className={'sidebar__container'}>
        <div className={'sidebar__logo'}>
          <LogoIcon />
          {'Автосалон'}
        </div>
        <div className={'sidebar__controls__logout-separator'} />
        <div className={'sidebar__controls'}>
          <div className={'sidebar__controls__nav'}>
            <SidebarButton name={'Оформить покупку'} path={'purchase'} />
            <SidebarButton name={'Заказать машины'} path={'order'} />
          </div>
          <div className={'sidebar__controls__logout'}>
            <div className={'sidebar__controls__logout-separator'} />
            <SidebarButton name={'Выйти'} onClick={onClickLogout} />
          </div>
        </div>
      </div >
    );
  };

  return (
    <>
      {elColumnSidebar()}
    </>
  );
};

export default Sidebar;
