import React from "react";
import "./Menu.scss";

const Button = (props) => {
    let buttonText = props.buttonText;
    let buttonStyle = props.isPrimary ? "primary" : "secondary";
    return (
        <div>
            <h4 className={buttonStyle}>{buttonText}</h4>
        </div>
    )
}

export default Button;