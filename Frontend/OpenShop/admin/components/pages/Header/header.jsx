/* Components */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* Pages */
import Home from '../../../../client/components/pages/Home/home';


const Header = () =>{
    return <>
        <Navbar bg="light" expand="lg" id="menu">
            <Container>
                <Navbar.Brand href="/home">Sistema de administrador</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/nuevosProductos">Nuevo</NavDropdown.Item>
                            <NavDropdown.Item href="/listaProductos">Lista</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='mr-auto'>
                        <NavDropdown title="Ventas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Lista</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-auto">
                        <NavDropdown title="Usuarios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/nuevoUsuario">Nuevo</NavDropdown.Item>
                            <NavDropdown.Item href="/listaUsuarios">Lista</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='mr-auto'>
                        <NavDropdown title="Perfil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/editar">Editar</NavDropdown.Item>
                            <NavDropdown.Item href="/admin">Salir</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='mr-auto'>
                        <Nav.Link href="/" element={<Home />}>Pagina Web</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
}

export default Header;