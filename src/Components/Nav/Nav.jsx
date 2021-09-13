import React from "react";
import "./Nav.scss";
import logo from "../../Assets/Images/logo.png"
import Menu from "../Menu/Menu";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <img src={logo} alt="Medium logo" />
                <h1>Programming</h1>
            </div>
            <div className="nav__right">
                <h5>Become a member</h5>
                <Menu buttonText="Sign in" />
                <Menu buttonText="Get Started" isPrimary />
            </div>
        </nav>
    )
}

export default Nav;