import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainNavBar from "../../components/layout/navigation/MainNavBar/MainNavBar";
import Title from "../../components/layout/Title/Title";
import ProductImages from "../../components/product/ProductImages/ProductImages";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import imageService from "../../services/imageService";
import productService from "../../services/productService";
import classes from "./SingleProduct.module.scss";

const SingleProduct = () => {
	let { id } = useParams();
	const [product, setProduct] = useState({
		name: "",
		description: "",
		startPrice: 0,
		startDate: "",
		endDate: "",
	});

	const [productImage, setProductImage] = useState([
		{ imagePath: "/products/no-img.png" },
	]);

	useEffect(() => {
		productService.getProduct(id).then((response) => setProduct(response));
	}, [id]);

	useEffect(() => {
		imageService
			.getProductImage(id)
			.then((response) => setProductImage(response));
	}, [id]);

	return (
		<div>
			<MainNavBar />
			<Title name={product.name} />
			<div className={classes.content}>
				<ProductImages images={productImage} />
				<ProductInfo product={product} />
			</div>
		</div>
	);
};

export default SingleProduct;
