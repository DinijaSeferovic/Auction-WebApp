import React, { useState } from "react";
import Image from "../../Image/Image";
import classes from "./ProductImages.module.scss";

const ProductImages = ({ images }) => {
	let imageArray = JSON.parse(images);

	const [selectedImg, setSelectedImg] = useState(imageArray[0]);

	return (
		<div className={classes.container}>
			<Image
				src={require(`../../../assets/images${selectedImg}`)}
				alt=""
				size="xxlarge"
				className={classes.container_selected}
			/>
			<div className={classes.container_images}>
				{imageArray.map((img, index) => (
					<div className={classes.container_images_alt} key={index}>
						<Image
							src={require(`../../../assets/images${img}`)}
							alt=""
							size="xsmall"
							onClick={() => setSelectedImg(img)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductImages;
