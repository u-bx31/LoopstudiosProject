
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../images/logo.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    return (
        <Navbar key='lg' expand='lg' variant='dark' className="mx-sm-5 nav-p1 m-0">
            <Container fluid>
                <Navbar.Brand href="#" className='h1 w-25'><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    placement="end"
                    className='bg-dark text-white'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                            <Logo />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#" className='h2 px-3'>ABOUT3</Nav.Link>
                            <Nav.Link href="#" className='h2 px-3'>CAREERS3</Nav.Link>
                            <Nav.Link href="#" className='h2 px-3'>EVENTS</Nav.Link>
                            <Nav.Link href="#" className='h2 px-3'>PRODUCTS</Nav.Link>
                            <Nav.Link href="#" className='h2 px-3'>SUPPORT</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default OffcanvasExample;