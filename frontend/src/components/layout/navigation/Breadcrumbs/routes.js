import { createBrowserHistory } from "history";
import { Route, Router } from "react-router";
import Home from "../../../../views/Home/Home";
import AboutUs from "../../../../views/Static/AboutUs/AboutUs";
import NotFound from "../../../../views/Static/NotFound/NotFound";
import PrivacyAndPolicy from "../../../../views/Static/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndConditions from "../../../../views/Static/TermsAndConditions/TermsAndConditions";

export default (
	<Router history={createBrowserHistory}>
		<Route path="/" name="Home" component={Home}>
			<Route path="about-us" name="About Us" component={AboutUs}></Route>
			<Route
				path="terms-and-conditions"
				name="Terms And Conditions"
				component={TermsAndConditions}
			></Route>
			<Route
				path="privacy-policy"
				name="Privacy And Policy"
				component={PrivacyAndPolicy}
			></Route>
			<Route
				path="*"
				name="Not Found"
				component={NotFound}
				breadcrumbIgnore
			></Route>
		</Route>
	</Router>
);
