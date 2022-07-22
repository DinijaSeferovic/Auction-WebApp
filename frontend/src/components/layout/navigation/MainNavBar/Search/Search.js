import searchIcon from "../../../../../assets/images/icons/search-icon.png";
import Icon from "../../../../Icon/Icon";
import classes from "./Search.module.scss";

const Search = () => {
	return (
		<div className={classes.search}>
			<form>
				<input type="text" placeholder="Try enter: Shoes" />
			</form>
			<div className={classes.search_icon}>
				<Icon alt="search" href="" size="small" src={searchIcon} />
			</div>
		</div>
	);
};

export default Search;
