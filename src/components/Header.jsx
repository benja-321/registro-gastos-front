import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [hamburgerClass, setHamburgerClass] = useState('rg-hamburger-line');
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleHamburgerClick = () => {
        if(!isMenuClicked){
            setHamburgerClass('rg-hamburger-line clicked');
        } else {
            setHamburgerClass('rg-hamburger-line');
        }

        setIsMenuClicked(!isMenuClicked);
    }

    const handleLogout = () => {
        setUser({
            user: '',
            name: '',
            lastName: ''
        });
        navigate("/");
    }

    return (
        <header className="rg-header-var">
            <button className="rg-hamburger-btn" onClick={handleHamburgerClick}>
                <div className={hamburgerClass}></div>
                <div className={hamburgerClass}></div>
                <div className={hamburgerClass}></div>
            </button>
            <p>Bienvenido {user.name}</p>
            <div className="rg-header-user">
                <i className="rg-header-user-icon bi bi-person-circle"></i>
                <p>{user.user}</p>
            </div>
            <button className="rg-header-logout-btn btn btn-outline-danger" onClick={handleLogout}>
                <i class="bi bi-box-arrow-right"></i>
            </button>
        </header>
    );
};

export default Header;