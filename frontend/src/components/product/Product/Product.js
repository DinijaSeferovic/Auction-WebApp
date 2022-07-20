import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import "./Product.scss";

const Product = ({ product, imgSize = "small" }) => {
	let imagePath = JSON.parse(product.imagePath)[0];
	let path = require(`../../../assets/images${imagePath}`);
	return (
		<div className={"product"}>
			<Image
				src={path}
				alt="Product image"
				size={imgSize}
				href={`/single-product/${product.id}`}
			/>
			<div className={"product_name"}>
				<Link
					to={`/single-product/${product.id}`}
					className={"product_name_link"}
				>
					{product.name}
				</Link>
			</div>
			<div className={"product_price"}>
				{product.highestBid ? "Highest bid" : "Start From"}
				<span className={"product_price_amount"}>
<<<<<<< HEAD
					{"$"}
=======
>>>>>>> fe20713... Add id to dto
					{product.highestBid
						? product.highestBid.toFixed(2)
						: product.startPrice.toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default Product;
