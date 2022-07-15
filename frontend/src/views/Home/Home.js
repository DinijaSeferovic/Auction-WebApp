import CategoryHighlightContainer from "../../components/container/CategoryHighlightContainer/CategoryHighlightContainer";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import ProductsTab from "../../components/product/ProductsTab/ProductsTab";
import TabContainer from "../../components/tabs/TabContainer/TabContainer";

import classes from "./Home.module.scss";

const Home = () => {
	return (
		<div className={classes.homepage}>
			<MainNavBar />
			<CategoryHighlightContainer />
			<TabContainer>
				<div label="New Arrivals">
					<ProductsTab apiProducts={"/api/products/new-arrivals"} />
				</div>
				<div label="Last Chance">
					<ProductsTab apiProducts={"/api/products/last-chance"} />
				</div>
			</TabContainer>
		</div>
	);
};

export default Home;
