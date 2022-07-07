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
	icon = false,
	iconSrc = "",
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
					className={classnames("btn", "btn_content", {
						[`btn_content_icon`]: icon,
					})}
				>
					{label}
					{icon ? (
						<Icon src={iconSrc} size="xsmall" isExternal={false} />
					) : null}
				</div>
			</button>
		</div>
	);
};

export default Button;
