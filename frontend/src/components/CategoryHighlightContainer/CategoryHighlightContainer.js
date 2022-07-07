import CategoryContainer from "../category/CategoryContainer/CategoryContainer";
import ProductHighlight from "../product/ProductHighlight/ProductHighlight";
import classes from "./CategoryHighlightContainer.module.scss";

const CategoryHighlightContainer = () => {
	return (
		<div className={classes.container}>
			<CategoryContainer name="Categories" />
			<ProductHighlight />
		</div>
	);
};

export default CategoryHighlightContainer;
