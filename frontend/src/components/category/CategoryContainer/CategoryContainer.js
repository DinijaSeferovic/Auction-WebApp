import { useEffect, useState } from "react";
import categoryService from "../../../services/categoryService";
import Category from "../Category/Category";
import classes from "./CategoryContainer.module.scss";

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		categoryService
			.getMainCategories()
			.then((response) => setCategories(response));
	}, []);

	return (
		<div className={classes.category_container}>
			<div className={classes.category_container_title}> Categories </div>
			<ul>
				{categories.map((category, i) => (
					<li key={i}>
						<div className={classes.category_container_item}>
							<Category name={category.name} />
						</div>
					</li>
				))}
				<li>
					<div className={classes.category_container_item}>
						<Category name={"All Categories"} />
					</div>
				</li>
			</ul>
		</div>
	);
};

export default CategoryContainer;
