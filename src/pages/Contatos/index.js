
import { Form, Button, Row, Table, Col } from 'react-bootstrap';

export default function Contatos(props) {

    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const url = "http://primeirophp/fseltroreact/app/src/pages/Contatos/";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta = await fetch(url, cabecalho);
        const resultado = await resposta.json()
    }

    return (

        <Table>
            <p className="text-center display-4">Entre em contato conosco</p>

            <Row>

                <Col className="col-lg-4 col-md-4 mx-auto">
                    <Form OnSubmit={controleEnvio}>

                        <h4>Mensagem</h4>
                        <Form.Group>
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control type="text" id="nome" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control type="text" id="msg" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>

                </Col>
            </Row>
            <Row>

                <Col className="col-lg-4 col-md-4 mx-auto">
              
                    <img src={require('./img/email.png').default} alt="" />
                    


                </Col>

                <Col className="col-lg-4 col-md-4 mx-auto">
              
                    
                    <img src={require('./img/wta.jpg').default} alt="" />


                </Col>
            </Row>
        </Table>
    )
}