import { useEffect, useState } from "react";
import arrowIcon from "../../../assets/images/icons/greater-than-icon.png";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import classes from "./ProductHighlight.module.scss";

const ProductHighlight = () => {
	const [name, setName] = useState("Running Shoes");
	const [startPrice, setStartPrice] = useState(59.0);
	const [image, setImage] = useState("/products/product-running-shoes.png");
	const [description, setDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue."
	);

	useEffect(() => {
		fetch("/api/products/highlight-product")
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((data) => {
				setName(data.name);
				setStartPrice(data.startPrice);
				setImage(data.image);
				setDescription(data.description);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	var path = require(`../../../assets/images${image}`);
	return (
		<div className={classes.container}>
			<div className={classes.container_info}>
				<div className={classes.container_info_name}>{name}</div>
				<div className={classes.container_info_price}>
					{`Start From $${startPrice.toFixed(2)}`}
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
					src={path}
					alt="Product image"
					size="xlarge"
					isExternal={false}
				/>
			</div>
		</div>
	);
};

export default ProductHighlight;
