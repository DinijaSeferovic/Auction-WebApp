import React from "react";
import "./Input.scss";

const Input = ({ type, placeholder, size }) => {
	return (
		<div className="field">
			<form>
				<input
					type={type}
					placeholder={placeholder}
					className={`${size}`}
				/>
			</form>
		</div>
	);
};

export default Input;
