import './assets/styles/App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import { HomePage } from './pages/HomePage';
import Footer from './components/footer/Footer';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import UserPage from './pages/UserPage';
import AdminCategoryProductsPage from './pages/AdminCategoryProductsPage';
import AdminCategoryPage from './pages/AdminCategoryPage';
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/account' element={<AuthPage />} />
          <Route exact path='/admin-account' element={isLoggedIn == "true" ? <AdminPage /> : < AuthPage />} />

          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/user-account' element={<UserPage />} />
          <Route exact path='/add-category' element={<AdminCategoryPage />} />
          <Route exact path='/add-categoryprodcuts' element={<AdminCategoryProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App


