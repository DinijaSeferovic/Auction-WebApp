import CategoryContainer from "../../category/CategoryContainer/CategoryContainer";
import ProductHighlight from "../../product/ProductHighlight/ProductHighlight";
import classes from "./CategoryHighlightContainer.module.scss";

const CategoryHighlightContainer = () => {
	return (
		<div className={classes.container}>
			<CategoryContainer />
			<ProductHighlight />
		</div>
	);
};

export default CategoryHighlightContainer;
