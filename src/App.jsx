/* eslint-disable no-unused-vars */
import './assets/styles/App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import { HomePage } from './pages/HomePage';
import Footer from './components/footer/Footer';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import UserPage from './pages/UserPage';
import UploadcarePage from './pages/UploadcarePage';
import AppContext, { Context } from './context/AppContext'
import ViewCategoryProducts from './pages/ViewCategoryProductsPage';
import ViewSingleProduct from './pages/ViewSingleProductPage';
import BackgroundRemoval from './pages/BackgroundRemoval';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import FramerMotion from './components/WebScrapper/FramerMotion';
import { PlateEditor } from './components/WebScrapper/Editor';
function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      {/* <FramerMotion /> */}
      <PlateEditor />
       {/* <BrowserRouter>
        <AppContext> 
       <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/account' element={<AuthPage />} />
            <Route exact path='/admin-account' element={isLoggedIn == "true" ? <AdminPage /> : < AuthPage />} />
            <Route exact path='/background-remove' element={isLoggedIn == "true" ? <BackgroundRemoval /> : < AuthPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/uploadcare' element={<UploadcarePage />} />
            <Route exact path='/user-account' element={isLoggedIn == "true" ? <UserPage /> : < AuthPage />} />
            <Route exact path={`/viewcategoryproducts/:categoryid`} element={<ViewCategoryProducts />} />
            <Route exact path={`/viewsingleproduct/:productid`} element={<ViewSingleProduct />} />
            <Route exact path={`/cart`} element={<CartPage />} />
            <Route exact path={`/wishlist`} element={<WishlistPage />} />
          </Routes>
          
          <Footer /> 

       </AppContext>
      </BrowserRouter>  */}

    </>
  )
}

export default App


