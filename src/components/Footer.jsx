import { Container } from 'react-bootstrap'
import './Footer.css'
import icon from '../assets/IconeEscola.png'

function Footer() {
    return (
        <Container>
            <footer className="py-4 mt-5 text-center text-md-start">

                <div className="container p-4">

                    <div className="row">

                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Minha App React</h5>
                            <a href='/'>
                                <img src={icon} alt="Icone escola" width={30} />
                                Minha App React
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links uteis</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">Instituições</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2026 Copyright:
                    <a className="text-body"> MInha app react</a>
                </div>
            </footer>
        </Container>
    )
}

export default Footer