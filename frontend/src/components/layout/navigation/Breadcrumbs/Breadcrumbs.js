import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import bcIcon from "../../../../assets/images/icons/arrow-icon.png";
import Icon from "../../../Icon/Icon";
import classes from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();

	return (
		<div className={classes.breadcrumbs}>
			{breadcrumbs.map(({ breadcrumb, match }, index) => (
				<span
					key={match.pathname}
					className={classes.breadcrumbs_content}
				>
					<NavLink
						to={match.pathname}
						className={({ isActive }) =>
							isActive
								? `${classes.breadcrumbs_content_link_active}`
								: `${classes.breadcrumbs_content_link}`
						}
					>
						{breadcrumb}
					</NavLink>
					{index !== breadcrumbs.length - 1 ? (
						<div className={classes.breadcrumbs_content_icon}>
							<Icon
								isExternal={false}
								size="xsmall"
								src={bcIcon}
							/>
						</div>
					) : (
						""
					)}
				</span>
			))}
		</div>
	);
};

export default Breadcrumbs;
