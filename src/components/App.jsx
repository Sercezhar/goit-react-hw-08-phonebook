import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './Routes';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperations';
import { AppBar } from './AppBar';
import { Container } from './Container';
import { EditModalPage } from 'pages/EditModalPage';
import { OvalLoader } from './Loaders/OvalLoader';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('pages/HomePage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Container>
          <Suspense fallback={<OvalLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <PhonebookPage />
                  </PrivateRoute>
                }
              >
                <Route path="edit/:contactId" element={<EditModalPage />} />
              </Route>

              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>

          <Toaster
            toastOptions={{
              duration: 3000,
              style: { padding: '16px' },
            }}
          />
        </Container>
      </>
    )
  );
}
