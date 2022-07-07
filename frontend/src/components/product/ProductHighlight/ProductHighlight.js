import { useState } from "react";
import arrowIcon from "../../../assets/images/icons/greater-than-icon.png";
import productImage from "../../../assets/images/products/product-running-shoes.png";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import classes from "./ProductHighlight.module.scss";

const ProductHighlight = () => {
	const [name, setName] = useState("Running Shoes");
	const [startPrice, setStartPrice] = useState(59.99);
	const [image, setImage] = useState(productImage);
	const [description, setDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue. Vivamus quis malesuada velit. In hac habitasse platea dictumst. "
	);

	return (
		<div className={classes.container}>
			<div className={classes.container_info}>
				<div className={classes.container_info_name}>{name}</div>
				<div className={classes.container_info_price}>
					{`Start From $${startPrice}`}
				</div>
				<div className={classes.container_info_description}>
					{description}
				</div>
				<div className={classes.container_info_button}>
					<Button
						label="BID NOW"
						variant="primary"
						size="large"
						outlined={true}
						icon={true}
						iconSrc={arrowIcon}
					/>
				</div>
			</div>
			<div className={classes.container_image}>
				<Icon
					src={image}
					alt="Product image"
					size="xlarge"
					isExternal={false}
				/>
			</div>
		</div>
	);
};

export default ProductHighlight;
