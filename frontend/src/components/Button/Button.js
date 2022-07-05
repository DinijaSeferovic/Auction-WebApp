import classnames from 'classnames';
import "./Button.scss";

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
				className={classnames("btn", `btn_${variant}`, { [`btn_${variant}_outline`]: outlined }, `btn_${size}`)}
				type={type}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
};

export default Button;
