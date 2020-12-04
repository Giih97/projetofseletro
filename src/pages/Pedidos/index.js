
import { useEffect, useState } from 'react';

import { Form, Button, Table } from 'react-bootstrap';
import Pedido from '../../Components/Pedidos';



export default function PagePedidos(props) {
   
    const[pedidos, setPedidos] = useState([]); // chamar funcao get

    useEffect(()=> {
        async function fethData(){
            const url = "http://localhost/projetos/fseltroreact/app/src/api/pedido.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        fethData();
    }, [])

    const controleEnvio = async (evento) => {
        evento.preventDefault();
          
        const dados = new FormData(evento.target); 

        const resposta = await fetch("http://localhost/projetos/fseltroreact/app/src/api/pedido.php", {
            method: "POST",
            body: dados
        } );
       
    }
  
    return (
        <container>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control  type="text" id="nome_cliente" name="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control  type="text" id="endereco" name="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control  type="text" id="telefone" name="telefone"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control  type="text" id="nome_produto" name="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control  type="text" id="valor_unit" name="valor" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control  type="text" id="quantidade" name="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control disabled type="text" id="valor_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
            </Button>
                </Form>
            </div>
        
        
        <Table>
                <tread>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>endereco</th>
                        <th>telefone</th>
                        <th>produto</th>
                        <th>valor</th>
                        <th>quantidade</th>
                        <th>total</th>
                    </tr>
                </tread>
                <tbody>
                {pedidos && pedidos.map (pedido => <Pedido key={pedido.idpedidos} id={pedido.idpedidos} nome_cliente={pedido.nome_cliente} endereco={pedido.endereco} 
                telefone={pedido.telefone} nome_produto={pedido.nome_produto} valor_unit={pedido.valor_unit} quantidade={pedido.quantidade} valor_final={pedido.valor_final} />)}
                </tbody>
            </Table>
            </container>
    );
}


