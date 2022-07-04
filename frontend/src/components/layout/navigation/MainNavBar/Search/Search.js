import classes from "./Search.module.scss";

const Search = () => {
	return (
		<div className={classes.search}>
			<form>
				<input type="text" placeholder="Try enter: Shoes" />
			</form>
			<img
				src={require("../../../../../assets/images/icons/search-icon.png")}
				alt="search"
			/>
		</div>
	);
};

export default Search;
