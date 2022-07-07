<<<<<<< HEAD
import CategoryContainer from "../../components/category/CategoryContainer/CategoryContainer";
=======
import CategoryHighlightContainer from "../../components/CategoryHighlightContainer/CategoryHighlightContainer";
>>>>>>> b7f18e8... Add product highlight and category container
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import ProductHighlight from "../../components/product/ProductHighlight/ProductHighlight";
import ProductsTab from "../../components/product/ProductsTab/ProductsTab";
import TabContainer from "../../components/tabs/TabContainer/TabContainer";

import classes from "./Home.module.scss";

const Home = () => {
	return (
		<div className={classes.homepage}>
			<MainNavBar />
			<div className={classes.categoryhighlight}>
				<CategoryContainer />
				<ProductHighlight />
			</div>
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
