import classes from "./Category.module.scss";

const Category = ({ name, onClick }) => {
	return (
		<div className={classes.category} onClick={onClick}>
			<div className={classes.category_title}> {name} </div>
		</div>
	);
};

export default Category;
