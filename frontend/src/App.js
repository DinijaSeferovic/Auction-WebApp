import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/navigation/Header/Header";
import Home from "./views/Home/Home";
import SingleProduct from "./views/SingleProduct/SingleProduct";
import AboutUs from "./views/Static/AboutUs/AboutUs";
import NotFound from "./views/Static/NotFound/NotFound";
import PrivacyAndPolicy from "./views/Static/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "./views/Static/TermsAndConditions/TermsAndConditions";

function App() {
	return (
		<div className="page-container">
			<BrowserRouter>
				<div className="content-wrap">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about-us" element={<AboutUs />} />
						<Route
							path="terms-and-conditions"
							element={<TermsAndConditions />}
						/>
						<Route
							path="privacy-policy"
							element={<PrivacyAndPolicy />}
						/>
						<Route
							path="single-product/:id"
							element={<SingleProduct />}
						/>
						<Route path="*" element={<NotFound />} />
						{/* 
					<Route path="shop" element={<Shop />} />
					<Route path="account" element={<Account />} />*/}
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
