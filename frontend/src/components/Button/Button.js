import React from "react";
import './Button.scss';

const styles = [
    "primary-solid",
    "secondary-solid",
    "primary-outline",
    "secondary-outline"
]

const sizes = [
    "small",
    "medium",
    "large"
]

const Button = (props) => {

    const checkButtonStyle = styles.includes(props.btnStyle) ? props.btnStyle : styles[0];
    const checkButtonSize = sizes.includes(props.btnSize) ? props.btnSize : sizes[0];

    return (
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={props.type} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
}

export default Button
