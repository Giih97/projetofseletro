
import {Card, Button, Col} from 'react-bootstrap'
export default function Produto(props) {

    return (
      <Col style={{diplay:"inline-block"}} id={props.categoria} className={" boxProduto mb-2"}>
      <Card style={{ minWidth: '18rem',maxWidth: '18rem', width: '18rem' }}>
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
    </Col>
    )
  }

 