import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <nav className="navbar">
            <div className="logo-container" onClick={ handleClick }>
                <img src="/Art_Institute_of_Chicago_logo.svg" alt="" />
            </div>
            <h1>Art Institute of Chicago</h1>
            <div className="links">
                <a href="/list">List</a>
                <a href="/gallery">Gallery</a>
            </div>
        </nav>
    );
}

export default Navbar;