import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, name, image, price}) {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem', height: '35rem', cursor: 'pointer'}} onClick={() => navigate(`/product/${id}`)}>
            <Card.Img variant="top" src={`/images/${image}`} style={{ height: "270px", width: "100%", objectFit: "contain", padding:'8px' }}/>
            <Card.Body style={{ textAlign: 'center'}} className='mt-4'>
                <Card.Title className='mt-1'>{name}</Card.Title>
                <Card.Text className='mt-1'><del>LKR: 380,000</del></Card.Text>
                <Row>
                    <Col style={{width: '100%'}}>
                        <Button variant="outline-dark" style={{ width: '100%', height: '55px'}}>LKR: {price.toLocaleString("en-LK")}</Button>
                    </Col>
                </Row>
                <p className='mt-2' style={{ fontSize: '13px' }}>Storage:</p>
                <Row className="justify-content-md-center">
                    <Col md="auto"><Badge bg="secondary">128 GB</Badge></Col>
                    <Col md="auto"><Badge bg="secondary">256 GB</Badge></Col>
                    <Col md="auto"  ><Badge bg="secondary">1 TB</Badge></Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;