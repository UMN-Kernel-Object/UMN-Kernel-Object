import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav , Offcanvas , Container} from 'react-bootstrap';

interface NavbarProps {
  title: string;                              // title of the navbar
  links: {text: string, url: string}[];       // list of links and their names
}


const NavbarComponent: React.FC<NavbarProps> = ({ title, links}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
            <Navbar.Brand href="#">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg"/>
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-lg"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {links.map((link, index ) =>
                <li className="nav-item active" key = {index}>
                  <Nav.Link href={link.url} > {link.text} </Nav.Link>
                </li>
              )}
            </Nav>
          </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
    </Navbar>
  );
};
export default NavbarComponent;

