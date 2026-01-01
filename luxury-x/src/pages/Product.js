import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { ProductApi } from "../api/ProductApi";
import { useEffect, useState } from "react";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await ProductApi.get(id);
                setProduct(data.data);
                console.log(data);
            }
            catch(err) {
                console.log("Error: " + err);
            }
        }

        fetchProduct();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col md={5}>
                    <Card style={{ width: '33rem', height: '32rem' }} className='mt-4'>
                        <Card.Img
                            src={`/images/${product.image}`}
                            alt="phone"
                            style={{ maxWidth: '88%', maxHeight: '88%' }}
                        />
                    </Card>
                    </Col>
                    <Col md={7}>
                        <Card style={{ width: '46rem', height: '32rem' }} className='mt-4'>
                            <Card.Body style={{ }} className='mt-1'>
                                <Badge bg="secondary" className="me-2">Apple</Badge>
                                <Badge bg="success"><i class="bi bi-check-circle"></i> In Stock</Badge>
                                <Card.Title className='mt-2' style={{ fontSize: '32px' }}>{product.name}</Card.Title>
                                <Card.Text className='mt-1 text-secondary' style={{ fontSize: '18px'}}><del>LKR: 380,000</del></Card.Text>
                                <Card.Text className='mt-1 ' style={{ fontSize: '30px'}}><b>LKR: {product?.price?.toLocaleString("en-LK")}</b></Card.Text>
                                <p className='mt-1' style={{ fontSize: '13px' }}>Storage:</p>
                                <Badge bg="secondary" className="me-2">128 GB</Badge>
                                <Badge bg="secondary" className="me-2">256 GB</Badge>
                                <Badge bg="secondary" className="me-2">1 TB</Badge>
                                <Card.Text className='mt-1' style={{ fontSize: '14px' }}>
                                    <Row className="p-4">
                                        {product.description}
                                    </Row>
                                </Card.Text>
                                <div className="text-center">
                                    <Button variant="dark" className="w-100" style={{ height: '45px' }}>Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card style={{ width: '99%', height: '90%' }} className='mt-4'>
                            <Card.Body className='mt-1'>
                                <Card.Title className='mt-2' style={{ fontSize: '22px' }}>Key Specifications</Card.Title>
                                <Card.Text className='mt-1' style={{ fontSize: '14px' }}>
                                    <Row className="p-4">
                                    <b>Titanium Build + Lighter Body</b>
                                    <ul style={{ margin: '10px' }}>
                                        <li>{product.specification}<br /></li>
                                    </ul>
                                    <b>A17 Pro Chip — Major Performance Jump</b>
                                    <ul style={{ margin: '10px' }}>
                                        <li>Apple's 3nm A17 Pro brings console-level GPU improvements, hardware ray tracing, and better efficiency</li>
                                    </ul>
                                    <b>New 5× Periscope Zoom Camera</b>
                                    <ul style={{ margin: '10px' }}>
                                        <li>
                                            Exclusive 120mm (5× optical) periscope telephoto, plus the upgraded 48 MP main sensor with better low-light and 24MP default shots.
                                        </li>
                                    </ul>
                                    <b>Bigger Battery + 29 Hours Video Playback</b>
                                    <ul style={{ margin: '10px' }}>
                                        <li>
                                        The 4441 mAh battery + efficiency gains means some of the best battery life on any iPhone ever.
                                        </li>
                                    </ul>
                                    </Row>
                                </Card.Text>    
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    );
}

export default Product;