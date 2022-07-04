import { Link } from "react-router-dom";
import "./Icon.scss";

const Icon = ({ src, alt, size = "small", href = "", isExternal = true }) => {
	return (
		<div>
			{isExternal ? (
				<a href={href} target={"_blank"} rel="noreferrer">
					<img src={src} alt={alt} className={size} />
				</a>
			) : (
				<Link to={href} target={"_self"}>
					<img src={src} alt={alt} className={size} />
				</Link>
			)}
		</div>
	);
};

export default Icon;
