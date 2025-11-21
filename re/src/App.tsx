import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import ArticlePage from './pages/ArticlePage';
import RegisterForm from './pages/RegisterForm';
import ArticleCreate from './components/ArticleCreate';
import ArticleList from './pages/ArticleList';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import ArticleEdit from './components/ArticleEdit';
import { Toaster } from 'sonner';

function App() {

  return (
        <>
        <Toaster position="bottom-right" aria-label={undefined} theme="dark"/>
        <Header />
        {/* <ToastContainer aria-label={undefined} /> */}
        <Routes>
          <Route path="/" element={ < Home/>} />
          <Route path="/articles" element={ < ArticleList/> } />
          <Route path="/articles/:id" element={ <ArticlePage /> } />
          <Route path="/articles/new" element={ < ArticleCreate /> } />
          <Route path="/articles/:id/edit" element={ < ArticleEdit /> } />
          <Route path="/login" element={ < LoginForm/> } />
          <Route path="/register" element={ < RegisterForm/> } />
        </Routes>
        <Footer />
        </>
        )
}

export default App
