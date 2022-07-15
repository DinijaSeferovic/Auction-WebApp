import React from "react";
import Icon from "../../Icon/Icon";
import "./Product.scss";

const Product = ({
	id,
	name = "Shoes Collection",
	image = "/products/product-running-shoes.png",
	startPrice = 59.0,
	highestBid = 0,
	imgSize = "medium",
}) => {
	var path = require(`../../../assets/images${image}`);
	return (
		<div className={"product"}>
			<div className={`product_img_${imgSize}`}>
				<Icon
					src={path}
					alt="Product image"
					size="mlarge"
					isExternal={false}
				/>
			</div>
			<div className={"product_name"}>{name}</div>
			<div className={"product_price"}>
				{startPrice < highestBid ? (
					<>
						Highest bid
						<span className={"product_price_amount"}>
							{" "}
							${highestBid.toFixed(2)}
						</span>
					</>
				) : (
					<>
						Start From
						<span className={"product_price_amount"}>
							{" "}
							${startPrice.toFixed(2)}
						</span>
					</>
				)}
			</div>
		</div>
	);
};

export default Product;
