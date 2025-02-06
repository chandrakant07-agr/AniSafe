import './navbar.css'

function NavBar() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <i class="fa-solid fa-paw"></i>
                    <span>AniSafe</span>
                </div>
                <div className="nav-center">
                    <a href="">Home</a>
                    <a href="">Find Pet</a>
                    <a href="">Donate</a>
                    <a href="">Help</a>
                </div>
                <div className="nav-bottom">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-bell"></i>
                    <button id="login">Login</button>
                    <button id="signup">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default NavBar