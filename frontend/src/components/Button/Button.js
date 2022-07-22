import classnames from "classnames";
import Icon from "../Icon/Icon";
import "./Button.scss";

const Button = ({
	label,
	onClick,
	type = "button",
	variant = "primary",
	size = "small",
	outlined = true,
	iconSrc,
}) => {
	return (
		<div>
			<button
				className={classnames(
					"btn",
					`btn_${variant}`,
					{ [`btn_${variant}_outline`]: outlined },
					`btn_${size}`
				)}
				type={type}
				onClick={onClick}
			>
				<div
					className={classnames("btn_content", {
						[`btn_content_icon`]: iconSrc,
					})}
				>
					{label}
					{iconSrc && <Icon src={iconSrc} size="xsmall" />}
				</div>
			</button>
		</div>
	);
};

export default Button;
