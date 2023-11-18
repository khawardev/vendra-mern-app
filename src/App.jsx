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
import AppContext from './context/AppContext'
import ViewCategoryProducts from './pages/ViewCategoryProductsPage';
import ViewSingleProduct from './pages/ViewSingleProductPage';
import CryptoNews from './components/WebScrapper/CryptoNews';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './toolkit/Slices/ProductsSlice';
import { setCategories } from './toolkit/Slices/CategoriesSlice';
import BackgroundRemoval from './pages/BackgroundRemoval';

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const productsResponse = await fetch('http://localhost:5000/api/products');
      console.log(productsResponse)
      const categoriesResponse = await fetch('http://localhost:5000/api/categories');
      const productsData = await productsResponse.json();
      const categoriesData = await categoriesResponse.json();

      // Dispatch actions to update the store
      dispatch(setProducts(productsData));
      dispatch(setCategories(categoriesData));
    };

    fetchData();
  }, [dispatch]);





  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      <BrowserRouter>
        <AppContext>
            {/* <CryptoNews /> */}
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
            </Routes>
          <Footer />
      
        </AppContext>
      </BrowserRouter>

    </>
  )
}

export default App


