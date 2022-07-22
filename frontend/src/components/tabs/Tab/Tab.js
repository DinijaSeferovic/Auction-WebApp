import React from "react";
import "./Tab.scss";

const Tab = ({ activeTab, setActiveTab, label }) => {
	const handleClick = () => {
		setActiveTab(label);
	};

	return (
		<div>
			<li
				className={`tab_listitem${
					activeTab === label ? "_active" : ""
				}`}
				onClick={handleClick}
			>
				{label}
			</li>
		</div>
	);
};

export default Tab;
