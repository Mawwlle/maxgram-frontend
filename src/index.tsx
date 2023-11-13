import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { throttle } from 'lodash';
import Sidebar from './widgets/sidebar';
// import Header from './widgets/header';
import Home from './pages/home';
import Sign from './pages/sign';
import { useEffect, useState } from 'react';
import api from './api';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { remove, set } from './store/user';
import './variables.css';
import Order from './pages/order';
import Purchase from './pages/puchase';


const AppRouter = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="*" element={<Navigate to="/feed" />} />
        <Route path="/order" element={<Order />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
};

const WatcherAppRouter = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

const App = () => {

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((store) => store.user.isAuth);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState<boolean>(true);

  const requestAuth = async () => {
    try {
      await api.users.getSelfUser()
        .then((resp) => {
          dispatch(set(resp.data));
          setIsLoadingUserInfo(false);
        });
    } catch (err) {
      console.warn(err);
      setIsLoadingUserInfo(false);
    }
  }

  const renewToken = () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken)
      api.token.refreshToken(refreshToken)
        .then((resp) => {
          localStorage.setItem('access_token', resp.data.access);
        });
  };

  const throttledRenewToken = throttle(renewToken, 250000, { trailing: false });

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      throttledRenewToken();
      setTimeout(() => requestAuth(), 300);

      const renewalInterval = setInterval(() => {
        throttledRenewToken();
      }, 250000);

      return () => {
        clearInterval(renewalInterval);
      };
    } else {
      dispatch(remove());
      setIsLoadingUserInfo(false);

      return () => void {};
    }
  }, [isAuth]);

  if (isLoadingUserInfo) {
    return (
      <div>Loading...</div>
    );
  };

  return (
    <BrowserRouter>
      {isAuth ?
        <div className={'app'}>
          <Sidebar />
          <div />
          <AppRouter />
        </div>
        :
        <div className={'app__watcher'}>
          <WatcherAppRouter />
        </div>
      }
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)