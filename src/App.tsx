import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from './global/path';
import Error from './components/Error';
import { LayoutMain } from './layouts/Main';
import { AuthenticationLayout } from './layouts/Authentication';
import { Login } from './components/Login';
import LazyImport from './elements/LazyImport';
import { Register } from './components/Register';
import './App.scss';
import './styles/theme.scss';

function App() {
  const path = useLocation();
  useEffect(() => {
    switch (path.pathname) {
      case PATH.ADMIN.HOME.route:
      case PATH.TEACHER.HOME.route:
      case PATH.STUDENT_NO_ROLE.HOME.route:
        document.title = 'Trang chủ';
        break;
      case '/auth/' + PATH.AUTH.LOGIN.route:
        document.title = 'Đăng nhập';
        break;
      case '/auth/' + PATH.AUTH.REGISTER.route:
        document.title = 'Đăng ký';
        break;
    }
  }, [path])
  return (
    <div className="theme">
      <Routes>
        <Route
          path={'/auth'}
          element={
            <LazyImport>
              <AuthenticationLayout />
            </LazyImport>}
        >
          <Route path={PATH.AUTH.LOGIN.route} element={<Login />} />
          <Route path={PATH.AUTH.REGISTER.route} element={<Register />} />
        </Route>
        <Route path={PATH.STUDENT_NO_ROLE.HOME.route} element={<LayoutMain />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
