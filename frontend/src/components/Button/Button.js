import "./Button.scss";

var classNames = require("classnames");
const Button = ({
	label,
	onClick,
	type = "button",
	variant = "primary",
	size = "small",
	outlined = true,
}) => {
	return (
		<div>
			<button
				className={classNames("btn", `btn_${variant}`, { [`btn_${variant}_outline`]: outlined }, `btn_${size}`)}
				type={type}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
};

export default Button;
