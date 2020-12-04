
import { Form, Button, Row } from 'react-bootstrap';

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
        const resultado = await  resposta.json()
    }

    return (

        <row>
            <form>
                <div className="col-lg-4 col-md-4 mx-auto">
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

                </div>
                <p className="text-center display-4">Entre em contato conosco</p>
            <div className="d-flex text-center mt-5">   
                <div className="hover">
                    <img src={require('./img/email.png').default} alt="" />
                    <img src={require('./img/wta.jpg').default} alt=""/>
                    
                </div>
            </div>
            </form>
        </row>
    )
}