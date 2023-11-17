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
import UploadcarePage from './pages/UploadcarePage';
import AppContext from './context/AppContext'
import ViewCategoryProducts from './pages/ViewCategoryProductsPage';
import ViewSingleProduct from './pages/ViewSingleProductPage';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      <BrowserRouter>
        <AppContext>

          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/account' element={<AuthPage />} />
            <Route exact path='/admin-account' element={isLoggedIn == "true" ? <AdminPage /> : < AuthPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/uploadcare' element={<UploadcarePage />} />
            <Route exact path='/user-account' element={isLoggedIn == "true" ? <UserPage /> : < AuthPage />} />
            <Route exact path='/add-category' element={isLoggedIn == "true" ? <AdminCategoryPage /> : < AuthPage />} />
            <Route exact path='/add-categoryprodcuts' element={isLoggedIn == "true" ? <AdminCategoryProductsPage /> : < AuthPage />} />
            <Route exact path={`/viewcategoryproducts/:categoryid`} element={<ViewCategoryProducts />} />
            <Route exact path={`/viewsingleproduct/:productid`} element={<ViewSingleProduct />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>

    </>
  )
}

export default App


