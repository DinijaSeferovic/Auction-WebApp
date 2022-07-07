import { useEffect, useState } from "react";
import Category from "../Category/Category";
import classes from "./CategoryContainer.module.scss";

const CategoryContainer = ({ name }) => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		fetch()
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
			<div className={classes.category_container_title}> {name} </div>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<div className={classes.category_container_item}>
							<Category id={category.id} name={category} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryContainer;
