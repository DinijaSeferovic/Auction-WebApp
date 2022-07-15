import React from "react";
import "./Tab.scss";

const Tab = ({ activeTab, setActiveTab, label }) => {
	const handleClick = () => {
		setActiveTab(label);
	};

	let className = "tab_listitem";

	if (activeTab === label) {
		className += "_active";
	}
	return (
		<div>
			<li className={className} onClick={handleClick}>
				{label}
			</li>
		</div>
	);
};

export default Tab;
