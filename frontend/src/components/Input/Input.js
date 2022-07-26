import React from "react";
import "./Input.scss";

const Input = ({ type, placeholder, size }) => {
	return (
		<div className="input_field">
			<input
				type={type}
				placeholder={placeholder}
				className={`input_field_${size}`}
			/>
		</div>
	);
};

export default Input;
