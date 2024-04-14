import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavPanel from './navPanel';

const Header = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    const toggleNavigation = () => setShowNavigation(!showNavigation);
    const navClass = showNavigation ? 'slide-in' : 'slide-out';
    const location = useLocation();
    const page = location.pathname;
    
    return (
        <>
        <Navbar className="px-3 bg-primary-black">
            <Navbar.Brand href="/" className="fs-3 btn-cream mb-0 mx-2 navbar-brand d-flex flex-row align-items-center nav-link">
                <img
                    src="LightLogo.svg"
                    alt="Logo"
                    width="35"
                    height="35"
                    className="d-inline-block align-text-center me-3"
                />
                Kaylee Chan
            </Navbar.Brand>
            <div className="ms-3 d-flex flex-row gap-3 large-nav">
                <Nav.Link href="/" className={`fs-5 ${page === "/" ? "underline" : ""}`}>About Me</Nav.Link>
                <Nav.Link href="/experience" className={`fs-5 ${page === "/experience" ? "underline" : ""}`}>Experience</Nav.Link>
                {/* <Nav.Link href="/about-me">About Me</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link> */}
                <Nav.Link href="/contact" className={`fs-5 ${page === "/contact" ? "underline" : ""}`}>Contact Me</Nav.Link>
            </div>
            <button aria-controls="navbar-nav" type="button" aria-label="Toggle navigation" className="bi bi-backpack2-fill fs-1 ms-auto mx-2" onClick={toggleNavigation}/>
        </Navbar>
        <NavPanel navClass={navClass} page={page}/>
        </>
    );
}

export default Header;