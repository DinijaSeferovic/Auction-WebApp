import searchIcon from "../../../../../assets/images/icons/search-icon.png";
import Icon from "../../../../Icon/Icon";
import Input from "../../../../Input/Input";
import classes from "./Search.module.scss";

const Search = () => {
	return (
		<div className={classes.search}>
			<Input
				type={"text"}
				placeholder={"Try enter: Shoes"}
				size={"medium"}
				className="search_input"
			/>
			<div className={classes.search_icon}>
				<Icon alt="search" href="" size="small" src={searchIcon} />
			</div>
		</div>
	);
};

export default Search;
