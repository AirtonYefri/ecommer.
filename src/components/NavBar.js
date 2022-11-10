import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './assets/logo.png';
import CartWidget from './CartWidget';

import ItemListContainer from './ItemListContainer.js';

const divStyle = {
width: 40
};

const divStyleNav = {
background: "transparent "
};


function NavBar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand}   expand={expand} className="mb-3"  style={divStyleNav}  >
          <Container fluid>
          
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Nav.Link href="#action1" className=""><img src={logo} style={divStyle} /></Nav.Link>  
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                       <img src={logo} style={divStyle} /> 
                </Offcanvas.Title>
              </Offcanvas.Header>
                 
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Porductos</Nav.Link>
                  <NavDropdown
                    title="Categoria"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Categoria 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     Categoria 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Categoria 3
                    </NavDropdown.Item>
                  </NavDropdown>
                   <NavDropdown
                    title="Marca"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Marca 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                     Marca 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Marca 3
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div nameclas="ms-auto pe-md-5 navbar-nav">
             <CartWidget />
             <ItemListContainer />
    </div>
                   
   
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;