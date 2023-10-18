import React from 'react';
import { Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Settings from './pages/settings';
import Sidebar from './widgets/sidebar';
// import Header from './widgets/header';
import Home from './pages/home';
import Feed from './pages/feed';
import Sign from './pages/sign';
import PostModal from './widgets/postModal';
import { useEffect, useState } from 'react';
import api from './api';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { set } from './store/user';

const AppRouter = () => {
  const modal = useAppSelector((store) => store.modal);
  
  return (
    <div>
      {/* <Header /> */}
      {modal && modal.type === 'post' && <PostModal />}
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/feed" />} />
      </Routes>  
    </div>
  );
};

const WatcherAppRouter = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
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

  useEffect(() => {
    api.users.getSelfUser()
      .then((resp) => {
        dispatch(set(resp.data));
        setIsLoadingUserInfo(false);      
      })
      .catch(() => {
        setIsLoadingUserInfo(false);
      })
  }, []);

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
