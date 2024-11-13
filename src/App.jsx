/* eslint-disable no-unused-vars */
import './assets/styles/App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import { HomePage } from './pages/HomePage';
import Footer from './components/footer/Footer';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import OrderManage from './pages/OrderManage';
import ContactManage from './pages/ContactManage';
import ContactPage from './pages/ContactPage';
import UserPage from './pages/UserPage';
import VendorPanelPage from './pages/VendorPanelPage';
import AppContext, { Context } from './context/AppContext'
import ViewCategoryProducts from './pages/ViewCategoryProductsPage';
import ViewSingleProduct from './pages/ViewSingleProductPage';
import BackgroundRemoval from './pages/BackgroundRemoval';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import FramerMotion from './components/WebScrapper/FramerMotion';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import EditProduct from './components/VendorRights/EditProduct';
import TrendingProductsPage from './pages/TrendingProductsPage';
import DiscountedProductPage from './pages/DiscountedProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import VendorAuthPage from "./pages/VendorAuthPage";
import ComparePage from './pages/ComparePage';
import CurencyConverter from './components/WebScrapper/CurencyConverter';
import ReviewsModal from './containers/SingleProductContainer/ReviewsModal';
import LightBox from './components/WebScrapper/Lightbox';
import MasonryGallery from './components/WebScrapper/MasonryGallery';
import Resizecall from './components/WebScrapper/Resizecall';
import AshanCardHover from './components/WebScrapper/AshanCardHover';
import AshanStepsComp from './components/WebScrapper/AshanStepper/AshanStepsComp';
import Stepper from './components/WebScrapper/AshanStepper/Stepper'
import TextEditor2 from './components/WebScrapper/TextEditor2';
import Api from './api/api';


function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      {/* <LightBox/> */}
      {/* <ReviewsModal /> */}
      {/* <FramerMotion /> */}
      {/* <div className="container mx-auto mt-4">
        <MasonryGallery />
      </div> */}
      {/* <Resizecall/> */}
      {/* <AshanCardHover /> */}
      {/* <AshanStepsComp /> */}
      {/* <TextEditor2 /> */}





      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/account' element={<AuthPage />} />
            <Route exact path='/background-remove' element={isLoggedIn == "true" ? <BackgroundRemoval /> : < AuthPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/vendorpanel' element={<VendorPanelPage />} />
            <Route path="/OrderManage" Component={OrderManage} />
            <Route path="/ContactManage" Component={ContactManage} />
            <Route exact path='/user-account' element={isLoggedIn == "true" ? <UserPage /> : < VendorAuthPage />} />
            <Route exact path={`/viewcategoryproducts/:categoryid`} element={<ViewCategoryProducts />} />
            <Route exact path={`/viewsingleproduct/:productid/:BestSell/:Discount/:DiscountedPrice`} element={<ViewSingleProduct />} />
            <Route exact path={`/cart`} element={<CartPage />} />
            <Route exact path={`/wishlist`} element={<WishlistPage />} />
            <Route exact path={`/about`} element={<AboutPage />} />1
            <Route exact path={`/shop`} element={<ShopPage />} />
            <Route exact path={`/edit/:productid`} element={<EditProduct />} />
            <Route exact path={`/bestselling`} element={<TrendingProductsPage />} />
            <Route exact path={`/discount`} element={<DiscountedProductPage />} />
            <Route exact path={`/checkout/:discountApplied`} element={<CheckoutPage />} />
            <Route exact path='/vendoraccount' element={<VendorAuthPage />} />
            <Route exact path='/admin-account' element={isLoggedIn == "true" ? <AdminPage /> : < VendorAuthPage />} />
            <Route exact path='/compare' element={<ComparePage />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>

    </>
  )

}

export default App


