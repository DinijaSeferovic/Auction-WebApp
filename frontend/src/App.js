import Header from './components/layout/navigation/Header/Header';
import MainNavBar from './components/layout/navigation/MainNavBar/MainNavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/layout/navigation/Footer/Footer';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <MainNavBar />
        <Footer />
        <Routes>
          {/*<Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacypolicy" element={<Privacy />} />
          <Route path="shop" element={<Shop />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
