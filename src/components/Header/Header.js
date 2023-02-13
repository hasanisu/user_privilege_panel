import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import User from '../User/User';

const Header = () => {

    const users = [
      {id: "jpuser_202301", name: "HASAN", path: '/hasan'},
      {id: "jpuser_202302", name: "HAMZA", path: '/hamza'},
      {id: "jpuser_202303", name: "ZAHAN", path: '/zahan'},
    ]
    return (
        <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-4">
          <Container fluid>
          
            <Navbar.Toggle className='bg-white' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='bg-dark'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className='bg-white'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PRIVILEGE PANEL
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 text-white">


                  <Link className='text-decoration-none text-white' to="/privileges">PRIVILEGES</Link>
                  
                 <NavDropdown
                    title = {<Link to='/users'>Users</Link>}
                    
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    
                
                     

                    
                    <div className='ms-3'>
                    {
                        users.map(user => <User
                        key={user.id}
                        user={user}
                        ></User>)
                      }
                    </div>
                    



                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    

                  </NavDropdown>
                 
                  

                  <Nav.Link to="#action2">ABOUT</Nav.Link>
                  


                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
};

export default Header;