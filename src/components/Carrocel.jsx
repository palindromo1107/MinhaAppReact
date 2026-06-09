import { Carousel, Image } from "react-bootstrap"

function Carrocel({ itens }) {

    let itensCarrocel = itens;

    return (
        <Carousel className='carousel'>
            {itensCarrocel.map(({ id, imgSrc, legenda, titulo, descricao }) => (

                <Carousel.Item key={id}>
                    <Image text={titulo} src={imgSrc} className='carousel-img' />
                    <Carousel.Caption>
                        <h3>{legenda}</h3>
                        <p>{descricao}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}
        </Carousel>
    )
}

export default Carrocel