import React from "react";
import arrowIcon from "../../../assets/images/icons/greater-than-icon.png";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import TabContainer from "../../tabs/TabContainer/TabContainer";
import Timer from "../../Timer/Timer";
import classes from "./ProductInfo.module.scss";

const ProductInfo = ({ product }) => {
	let bidPrice = product.highestBid ? product.highestBid : product.startPrice;
	return (
		<div className={classes.info}>
			<div className={classes.info_title}>{product.name}</div>
			<div className={classes.info_start}>
				{"Starts From "}
				<span className={classes.info_start_price}>
					{"$"}
					{product.startPrice}
				</span>
			</div>
			<div className={classes.info_specs}>
				<div className={classes.info_specs_bid}>
					{product.highestBid ? "Highest bid: " : "Start From: "}
					<span className={classes.info_specs_bid_amount}>
						{"$"}
						{bidPrice}
					</span>
				</div>
				<div className={classes.info_specs_bids}>
					{"Number of bids: "}
					<span className={classes.info_specs_bids_number}>
						{product.bids ? product.bids : 0}
					</span>
				</div>
				<div className={classes.info_specs_timer}>
					{"Time left: "}
					<span className={classes.info_specs_timer_time}>
						<Timer endDate={product.endDate} />
					</span>
				</div>
			</div>
			<div className={classes.info_placebid}>
				<div className={classes.info_placebid_input}>
					<Input
						type={"text"}
						placeholder={`Enter $${bidPrice + 1} or higher`}
						size={"small"}
					/>
				</div>
				<div className={classes.info_placebid_button}>
					<Button
						label="PLACE BID"
						variant="primary"
						size="large"
						outlined={true}
						iconSrc={arrowIcon}
						disabled={true}
					/>
				</div>
			</div>
			<div className={classes.info_tab}>
				<TabContainer size="small">
					<div label="Details">
						<div className={classes.info_tab_details}>
							{product.description}
						</div>
					</div>
					<div label=""></div>
				</TabContainer>
			</div>
		</div>
	);
};

export default ProductInfo;
