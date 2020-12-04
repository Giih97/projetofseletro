
import { Col, Row } from 'react-bootstrap';
import Categoria from '../../Components/Categoria';
import Produtos from '../../Components/Produtos/Produtos'

export default function PageProdutos(props) {
  return (
<>
    <h2 className="border-bottom py-5 text-center">Produtos</h2>
      <Row> 

        <Col lg={2} md={4}>
        <Categoria />
        </Col>
      
        <Col lg={9} md={8}></Col>
    <Produtos />
  
    </Row>
    </>
  )
}

