import { useEffect, useState } from "react";
import categoryService from "../../../services/categoryService";
import Category from "../Category/Category";
import classes from "./CategoryContainer.module.scss";

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
<<<<<<< HEAD
		categoryService
			.getMainCategories()
			.then((response) => setCategories(response));
=======
		fetch("/api/category/main-categories")
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((data) => setCategories(data))
			.catch((err) => {
				console.log(err.message);
			});
>>>>>>> 3b3ce53... Add necessary components
	}, []);

	return (
		<div className={classes.category_container}>
			<div className={classes.category_container_title}> Categories </div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<div className={classes.category_container_item}>
<<<<<<< HEAD
							<Category name={category.name} />
=======
							<Category id={category.id} name={category.name} />
>>>>>>> 3b3ce53... Add necessary components
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
