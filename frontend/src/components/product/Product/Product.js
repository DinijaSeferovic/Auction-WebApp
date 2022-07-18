import React from "react";
import Image from "../../Image/Image";
import "./Product.scss";

const Product = ({
	name,
	image = "/products/no-img.png",
	startPrice,
	highestBid,
	imgSize = "small",
}) => {
	let path = require(`../../../assets/images${image}`);
	return (
		<div className={"product"}>
			<Image src={path} alt="Product image" size={imgSize} />
			<div className={"product_name"}>{name}</div>
			<div className={"product_price"}>
				{highestBid ? "Highest bid" : "Start From"}
				<span className={"product_price_amount"}>
					{highestBid ? highestBid.toFixed(2) : startPrice.toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default Product;
