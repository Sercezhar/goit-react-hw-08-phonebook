import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar';
import { HomePage } from 'pages/HomePage';
import { PhonebookView } from 'pages/PhonebookPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
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
