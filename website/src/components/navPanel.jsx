import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavPanel = ({navClass}) => {
  return (
    <div id="navbar-nav" className={`d-flex flex-column p-3 gap-3 fs-5 ${navClass}`}>
        <Nav.Link href="/experience">Experience</Nav.Link>
        {/* <Nav.Link href="/about-me">About Me</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link> */}
        <Nav.Link href="/contact">Contact Me</Nav.Link>
    </div>
  );
}

export default NavPanel;
