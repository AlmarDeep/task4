import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

const NavBar = ({ logo }) => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#3fbbc0" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>Monday-Satrday, 8AM TO 10PM</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: "white" }}>
              Call us now +1 5589 55488 55
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="xxl" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" >HOME</Nav.Link>
              <Nav.Link href="#action2">ABOUT</Nav.Link>
              <Nav.Link href="">SERVICES</Nav.Link>
              <Nav.Link href="">DEPARTMENTS</Nav.Link>
              <Nav.Link href="">DOCTORS</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">CONTACT</Nav.Link>
              <Nav.Link href="#" >
                Link
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <Form className="d-flex">

            <Button style={{ background: "#3fbbc0", border: "#3fbbc0" }} >MAKE AN APPOINTMENT</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar