import './assets/styles/App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import { HomePage } from './pages/Home/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App


