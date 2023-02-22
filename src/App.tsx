import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PATH } from 'global/path';
import { toastMessage } from 'global/global-action';
import { Obj } from 'global/interface';
import { ROLE } from 'global/enum';
import { State } from 'redux-saga/reducer';
import { AuthenticationLayout } from 'layouts/Authentication';
import Layout from 'layouts';
import LayoutMain from 'layouts/Main';
import AdminLayout from 'layouts/Admin';
import Error from 'components/Error';
import { Login } from 'components/Login';
import { Toaster } from 'elements/Toaster';
import LazyImport from 'elements/LazyImport';
import { Register } from 'components/Register';
import { ResetPassowrd } from 'components/ResetPassword';
import { ForgotPassword } from 'components/ForgotPassword';
import { AuthProtect } from 'components/AuthProtect';
import './App.scss';
import './styles/theme.scss';


function App() {
  const path = useLocation();
  const toast = useSelector((state: State) => state.toastHandle);
  const crrUser = useSelector((state: State) => state.userLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    switch (path.pathname) {
      case PATH.ADMIN.HOME.route:
      case PATH.TEACHER.HOME.route:
      case PATH.STUDENT_NO_ROLE.HOME.route:
        document.title = 'Phoenix Dance Studio';
        break;
      case '/auth/' + PATH.AUTH.LOGIN.route:
        document.title = PATH.AUTH.LOGIN.title;
        break;
      case '/auth/' + PATH.AUTH.REGISTER.route:
        document.title = PATH.AUTH.REGISTER.title;
        break;
      case '/auth/' + PATH.AUTH.FORGOT_PASSWORD.route:
        document.title = PATH.AUTH.FORGOT_PASSWORD.title;
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
            </LazyImport>
          }
        >
          <Route path={PATH.AUTH.LOGIN.route} element={<Login />} />
          <Route path={PATH.AUTH.REGISTER.route} element={<Register />} />
          <Route path={PATH.AUTH.FORGOT_PASSWORD.route} element={<ForgotPassword />} />
          <Route path={PATH.AUTH.RESET_PASSWORD.route} element={<ResetPassowrd />} />
        </Route>
        <Route element={<AuthProtect><Layout /></AuthProtect>}>
          {(!crrUser || !crrUser.success || (crrUser && crrUser.success && (crrUser.response as Obj)?.data.userInfor.role) === ROLE.STUDENT) ?
            <Route path={PATH.STUDENT_NO_ROLE.HOME.route} element={<LayoutMain />} /> : (
              ((crrUser && crrUser.success && (crrUser.response as Obj)?.data.userInfor.role) === ROLE.ADMIN) ?
                <Route path={PATH.STUDENT_NO_ROLE.HOME.route} element={<AdminLayout />} /> : <></>
            )
          }

        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      {
        toast?.show && <Toaster
          show={toast?.show}
          onClose={() => {
            dispatch(toastMessage(null, true))
          }}
          type={toast?.type}
          position={toast?.position}
          message={toast?.message as string} />
      }

    </div >
  );
}

export default App;
