import { Link } from "react-router-dom";
import "./Image.scss";

const Image = ({ src, alt = "", size = "large", href = "" }) => {
	return (
		<div>
			<Link to={href} target="_self">
				<img src={src} alt={alt} className={`image_${size}`} />
			</Link>
		</div>
	);
};

export default Image;
