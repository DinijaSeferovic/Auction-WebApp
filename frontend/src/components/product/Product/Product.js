import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import "./Product.scss";

const Product = ({ product, imgSize = "small" }) => {
	let path = require(`../../../assets/images${product.imagePath}`);
	return (
		<div className={"product"}>
			<Image
				src={path}
				alt="Product image"
				size={imgSize}
				href="/single-product"
				data={product}
			/>
			<div className={"product_name"}>
				<Link
					to="/single-product"
					state={product}
					className={"product_name_link"}
				>
					{product.name}
				</Link>
			</div>
			<div className={"product_price"}>
				{product.highestBid ? "Highest bid" : "Start From"}
				<span className={"product_price_amount"}>
					{"$"}
					{product.highestBid
						? product.highestBid.toFixed(2)
						: product.startPrice.toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default Product;
