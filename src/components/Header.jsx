import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand='lg' className='bg-primary fw-bolder'>
      
      <Container fluid>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action1">Our Story</Nav.Link>
            <Nav.Link href="#action2">Recipes</Nav.Link>
            
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search"
              className='me-2'
              aria-label="Search"
            />
            <Button className='bg-success text-light fw-bolder' variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;