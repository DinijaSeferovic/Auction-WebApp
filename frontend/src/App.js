import Header from './components/layout/navigation/Header/Header';
import MainNavBar from './components/layout/navigation/MainNavBar/MainNavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import TermsAndConditions from './views/Static/TermsAndConditions/TermsAndConditions';
import AboutUs from './views/Static/AboutUs/AboutUs';
import PrivacyAndPolicy from './views/Static/PrivacyAndPolicy/PrivacyAndPolicy';
import './App.scss';

function App() {
  return (
    <div className="page-container">
		<BrowserRouter>
			<div className="content-wrap">
				<Header />
				<MainNavBar />
				<Routes>
					<Route path="aboutus" element={<AboutUs />} />
					<Route path="termsandconditions" element={<TermsAndConditions />} />
					<Route path="privacypolicy" element={<PrivacyAndPolicy />} />
					{/* 
					<Route path="shop" element={<Shop />} />
					<Route path="account" element={<Account />} />
					<Route path="*" element={<NoPage />} /> */}
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
    </div>
  );
}

export default App;
