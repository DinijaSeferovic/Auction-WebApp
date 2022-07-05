import fbIcon from "../../../../assets/images/icons/facebook-icon.png";
import igIcon from "../../../../assets/images/icons/instagram-icon.png";
import twIcon from "../../../../assets/images/icons/twitter-icon.png";
import Icon from "../../../Icon/Icon";
import classes from "./Header.module.scss";

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.header_socialmedia}>
				<ul>
					<li>
						<Icon
							alt="facebook"
							href="https://facebook.com"
							isExternal={true}
							size="medium"
							src={fbIcon}
						/>
					</li>
					<li>
						<Icon
							alt="instagram"
							href="https://instagram.com"
							isExternal={true}
							size="medium"
							src={igIcon}
						/>
					</li>
					<li>
						<Icon
							alt="twitter"
							href="https://twitter.com"
							isExternal={true}
							size="medium"
							src={twIcon}
						/>
					</li>
				</ul>
			</div>
			<div className={classes.header_righttext}>
				<h5>Hi, John Doe</h5>
			</div>
		</div>
	);
};

export default Header;
