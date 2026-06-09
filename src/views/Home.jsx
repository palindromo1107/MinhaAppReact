import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import Carrocel from '../components/Carrocel.jsx'

function Home() {
  let imagensInfo = [
    {
      id: 1,
      imgSrc: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Crianças estudando',
      titulo: 'Estude',
      descricao: 'Crianças estudando na escola'
    },
    {
      id: 2,
      imgSrc: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Crianças com duvidas',
      titulo: 'Questione',
      descricao: 'Mais um dia na escola publica'
    }
  ]

  return (
    <Container>

      <Carrocel itens={imagensInfo}></Carrocel>

      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>

    </Container>
  )
}

export default Home