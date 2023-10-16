import { Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import Settings from './pages/settings';
import Sidebar from './widgets/sidebar';
// import Header from './widgets/header';
import Home from './pages/home';
import Feed from './pages/feed';
import Sign from './pages/sign';
import { useEffect, useState } from 'react';
import api from './api';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { set } from './store/user';
import PostModal from './widgets/postModal';

const AppRouter = () => {

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/feed" />} />
      </Routes>  
    </>
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
  const modal = useAppSelector((store) => store.modal);
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
          {modal && modal.type === 'post' && <PostModal />}
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

export default App
