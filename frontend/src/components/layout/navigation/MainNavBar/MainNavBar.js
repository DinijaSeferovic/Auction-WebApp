import { NavLink } from "react-router-dom";
import logo from "../../../../assets/images/logos/logo-small.png";
import Icon from "../../../Icon/Icon";
import classes from "./MainNavBar.module.scss";
import Search from "./Search/Search";

const MainNavBar = () => {
	return (
		<div className={classes.mainnavbar}>
			<div className={classes.mainnavbar_logo}>
				<Icon alt="logo" href="/" size="large" src={logo} />
			</div>
			<div className={classes.mainnavbar_searchbar}>
				<Search />
			</div>
			<div className={classes.mainnavbar_navbar}>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? `${classes.navlink_active}`
										: `${classes.navlink}`
								}
							>
								HOME
							</NavLink>
						</li>
						{/* 
					<li>
						<NavLink to="/shop">SHOP</NavLink>
					</li>
					<li>
						<NavLink to="/account">MY ACCOUNT</NavLink>
					</li>*/}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MainNavBar;
