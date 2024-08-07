
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavbarComp() {

    
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SPACE NEWS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">MORE SPACE</Nav.Link>
            <NavDropdown title="SPACE DROP DOWN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SPACE THING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ADDITIONAL SPACE
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ALL THE SPACE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;