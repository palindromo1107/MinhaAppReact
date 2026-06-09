import { Container, Nav, Navbar } from "react-bootstrap"
import IconeEscola from '../assets/IconeEscola.png'
import './Header.css'
import { Link } from "react-router"

function Header() {
    return (
        <Container>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>
                            <img src={IconeEscola} alt="icone escola" width={30} />
                            Censo Escolar
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/instituicaoensino'>Instituicao ensino</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </Container>
    )
}

export default Header