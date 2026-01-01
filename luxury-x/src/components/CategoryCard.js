import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

function CategoryCard({ name, description, icon}) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '25rem', height: '20rem', cursor: "pointer" }} className='mt-4' onClick={() => navigate(`/products/${name}`)}>
      <Card.Body style={{ textAlign: 'center'}} className='mt-4'>
        <i class={`bi bi-${icon} fs-1`}></i>
        <Card.Title className='mt-3'>{ name }</Card.Title>
        <Card.Text className='mt-3'>
          { description }
        </Card.Text>
        <Row className="justify-content-md-center">
            <Col md="auto"><Badge bg="secondary">28 Products</Badge></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;