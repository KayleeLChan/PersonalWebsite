import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavPanel = ({navClass, page}) => {
  return (
    <div id="navbar-nav" className={`d-flex flex-column p-3 gap-3 fs-5 ${navClass}`}>
        <h2 className='mb-0 mt-3'>Inventory</h2>
        <Nav.Link href="/" className={`${page === "/" ? "underline" : ""}`}>About Me</Nav.Link>
        <Nav.Link href="/experience" className={`${page === "/experience" ? "underline" : ""}`}>Experience</Nav.Link>
        {/* <Nav.Link href="/about-me">About Me</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link> */}
        <Nav.Link href="/contact" className={`${page === "/contact" ? "underline" : ""}`}>Contact Me</Nav.Link>
    </div>
  );
}

export default NavPanel;
