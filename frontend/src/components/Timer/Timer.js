import React, { useEffect, useState } from "react";
import classes from "./Timer.module.scss";

const Timer = ({ endDate }) => {
	const targetDate = new Date(endDate);
	const calculateTimeLeft = (targetDate) => {
		let difference = 0;
		if (targetDate.getTime() > new Date().getTime()) {
			difference = targetDate.getTime() - new Date().getTime();
		}
		let bigTimeUnitsLeft = {};
		let smallTimeUnitsLeft = {};

		if (difference > 0) {
			bigTimeUnitsLeft = {
				Weeks: Math.floor(difference / (1000 * 7 * 60 * 60 * 24)),
				Days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
			};
			smallTimeUnitsLeft = {
				Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				Minutes: Math.floor((difference / 1000 / 60) % 60),
				Seconds: Math.floor((difference / 1000) % 60),
			};
		}
		if (bigTimeUnitsLeft.Weeks === 0 && bigTimeUnitsLeft.Days === 0)
			return smallTimeUnitsLeft;
		else return bigTimeUnitsLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);
		return () => clearTimeout(timer);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<span>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});

	return (
		<div className={classes.time}>
			{timerComponents.length ? timerComponents : null}
		</div>
	);
};

export default Timer;
