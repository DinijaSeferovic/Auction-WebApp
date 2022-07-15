import { useEffect, useState } from "react";
import Category from "../Category/Category";
import classes from "./CategoryContainer.module.scss";

const CategoryContainer = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
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
	}, []);

	return (
		<div className={classes.category_container}>
			<div className={classes.category_container_title}> Categories </div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<div className={classes.category_container_item}>
							<Category id={category.id} name={category.name} />
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
