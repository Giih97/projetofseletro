
import {Card, Button} from 'react-bootstrap'
export default function Produto(props) {

    return (
      <Card style={{ width: '18rem' }} id={props.categoria} className={"boxProduto"}>
      <Card.Img variant="top" src={require(`./img/${props.imagem}`).default } alt="Imagem de Produtos" />
      <Card.Body>
        <Card.Title>{props.categoria}</Card.Title>
        <Card.Text>
              <p>{props.descricao}</p>
              <p>{props.preco}</p>
              <p>{props.preco_final}</p>
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
    )
  }

 