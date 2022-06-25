import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar } from './AppBar';
import { HomePage } from 'pages/HomePage';
import { PhonebookView } from 'pages/PhonebookPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { getCurrentUser } from 'redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme={'colored'}
      />

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="contacts" element={<PhonebookView />} exact />
        <Route path="login" element={<LoginPage />} exact />
        <Route path="register" element={<RegisterPage />} exact />
      </Routes>
    </>
  );
}
