import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router";
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App.tsx';
import './index.css';
import ArticleList from './pages/ArticleList.tsx';
import LoginForm from './pages/LoginForm.tsx';
import RegisterForm from './pages/RegisterForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/articles" element={ < ArticleList/> } />
          <Route path="/login" element={ < LoginForm/> } />
          <Route path="/register" element={ < RegisterForm/> } />
        </Routes>
        <Footer />
    </BrowserRouter>
  </StrictMode>
);
