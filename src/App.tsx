import { Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import Settings from './pages/settings';
import Sidebar from './widgets/sidebar';
// import Header from './widgets/header';
import Home from './pages/home';
import Feed from './pages/feed';
import Sign from './pages/sign';

const AppRouter = () => {
  return (
    <div>
      {/* <Header /> */}
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

  const isAuth = false;

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

export default App
