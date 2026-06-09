import { Card } from "react-bootstrap"

function CardEstrutura({ escola }) {

    return (
        <>
            <div key={escola.CO_ENTIDADE} className="cards-container">
                <Card className="school-card shadow-sm border-0">
                    <Card.Body className="d-flex flex-column gap-2">

                        <div className="title-section">
                            <Card.Title className="fw-bold fs-5 mb-1">
                                {escola.NO_ENTIDADE}
                            </Card.Title>

                            <span className="badge bg-secondary">
                                Código: {escola.CO_ENTIDADE}
                            </span>
                        </div>

                        <hr />

                        <div className="location-section">
                            <h6 className="text-muted mb-2">Localização</h6>

                            <Card.Text className="mb-1">
                                <b>Região:</b> {escola.NO_REGIAO}
                            </Card.Text>

                            <Card.Text className="mb-1">
                                <b>UF:</b> {escola.NO_UF} ({escola.SG_UF})
                            </Card.Text>

                            <Card.Text className="mb-1">
                                <b>Município:</b> {escola.NO_MUNICIPIO}
                            </Card.Text>

                            <Card.Text className="mb-1">
                                <b>Mesorregião:</b> {escola.NO_MESORREGIAO}
                            </Card.Text>

                            <Card.Text className="mb-1">
                                <b>Microrregião:</b> {escola.NO_MICRORREGIAO}
                            </Card.Text>
                        </div>

                        <hr />

                        <div className="info-section d-flex justify-content-between align-items-center">

                            <div className="matriculas-box text-center p-2 rounded">
                                <small className="text-muted d-block">
                                    Matrículas
                                </small>

                                <span className="fw-bold fs-5">
                                    {escola.QT_MAT_BAS}
                                </span>
                            </div>

                            <div className="ano-box text-center p-2 rounded">
                                <small className="text-muted d-block">
                                    Ano Censo
                                </small>

                                <span className="fw-bold fs-5">
                                    {escola.NU_ANO_CENSO}
                                </span>
                            </div>

                        </div>

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CardEstrutura