import './navbar.css';
import { useState } from "react";

function NavBar() {
    const [show, setShow] = useState(false);

    function toggleMenu() {
        setShow(!show);
    }

    return (
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <i className="fa-solid fa-paw"></i>
                    <span>AniSafe</span>
                </div>
                <div className="nav-center">
                    <a href="/">Home</a>
                    <a href="/AdoptPet">Find Pet</a>
                    <a href="/Donate">Donate</a>
                    <a href="/Help">Help</a>
                </div>
                <div className="nav-right">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-regular fa-bell"></i>
                    <button id="login">Login</button>
                    <button id="signup">Sign Up</button>
                </div>
                <div className="nav-right-center">
                {!show && (
        <i className="fa-solid fa-bars menu-icon" onClick={toggleMenu}></i>
    )}
                </div>
                <div className={`nav-right-center-container ${show ? "show" : ""}`}>
                    <div className="nav-right-center-one">
                    <i className="fa-solid fa-paw"></i>
                    <span>AniSafe</span>
                        <i className="fa-solid fa-times close-icon" onClick={toggleMenu}></i>
                    </div>
                    <div className="nav-right-center-two">
                        <a href="/">Home</a>
                        <a href="/AdoptPet">Adopt</a>
                        <a href="/Donate">Donate</a>
                        <a href="/Help">Help</a>
                        <a href="/Notification">Notification <i className="fa-solid fa-bell"></i></a>
                        <a href="/Search">Search <i className="fa-solid fa-magnifying-glass"></i></a>
                        <div className="nav-right-center-btn">
                            <button id="signup" className='nav-signup'>Sign Up</button>
                            <button id="login" className='nav-login'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;