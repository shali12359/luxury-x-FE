import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCard from '../components/HomeCard';
import ProductCard from '../components/ProductCard';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import CarouselMain from '../components/Carousels';
import { useState, useEffect } from 'react';
import { ProductApi } from "../api/ProductApi";
import { Link } from "react-router-dom";

function Home() {
    const [mobiles, setMobiles] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [watches, setWatches] = useState([]);
    const categoryMobile = "Mobile Phones";
    const categoryLaptops = "Laptops";
    const categoryWatches = "Smart Watches";

    useEffect(() => {
        const fetchMobiles = async () => {
            try {
                const data = await ProductApi.getByCategoryName('Mobile Phones');
                setMobiles(data.data);
                console.log(data);
            }
            catch(err) {
                console.log("Error: " + err);
            }
        }

        const fetchLaptops = async () => {
            try {
                const data = await ProductApi.getByCategoryName('Laptops');
                setLaptops(data.data);
                console.log(data);
            }
            catch(err) {
                console.log("Error: " + err);
            }
        }

        const fetchWatches = async () => {
            try {
                const data = await ProductApi.getByCategoryName('Smart Watches');
                setWatches(data.data);
                console.log(data);
            }
            catch(err) {
                console.log("Error: " + err);
            }
        }

        fetchMobiles();
        fetchLaptops();
        fetchWatches();
    }, []);

    return(
        <>
            <CarouselMain />
            <Container>
            <Row className='mt-4'>
                <Col><h3>Mobile Phones</h3></Col>
                <Row>
                    <Col className="text-end me-4"><Link to={`/products/${categoryMobile}`}>See More</Link></Col>
                </Row>
                <Row className='mt-3 mb-3 justify-content-md-center'>
                    {
                        mobiles.slice(0, 4).map((mobile) => (
                            <Col md="auto">
                                <ProductCard name={ mobile.name } id={mobile.id}  image={mobile.image} price={mobile.price}/>
                            </Col>
                        ))
                    }
                </Row>
            </Row>
            <Row className='mt-4'>
                <Col><h3>Laptops</h3></Col>
                <Row>
                    <Col className="text-end me-4"><Link to={`/products/${categoryLaptops}`}>See More</Link></Col>
                </Row>
                <Row className='mt-3 mb-3 justify-content-md-center'>
                    {
                        laptops.slice(0, 4).map((laptop) => (
                            <Col md="auto">
                                <ProductCard name={ laptop.name } id={laptop.id}  image={laptop.image} price={laptop.price}/>
                            </Col>
                        ))
                    }
                </Row>
            </Row>
            <Row className='mt-4'>
                <Col><h3>Smart Watches</h3></Col>
                <Row>
                    <Col className="text-end me-4"><Link to={`/products/${categoryWatches}`}>See More</Link></Col>
                </Row>
                <Row className='mt-3 mb-3 justify-content-md-center'>
                    {
                        watches.slice(0, 4).map((watch) => (
                            <Col md="auto">
                                <ProductCard name={ watch.name } id={watch.id}  image={watch.image} price={watch.price}/>
                            </Col>
                        ))
                    }
                </Row>
            </Row>
            <Row className='mt-5'>
                <Col><h4>LuxuryX | Sri Lanka's #1 Dealer for iPhones, iPads, MacBooks and Luxury Electronics</h4></Col>
            </Row>
            <Row className='mt-2 mb-4'>
                <Col><p>Welcome to LuxuryX, your premier destination for luxury electronics in Sri Lanka. We offer an extensive collection of high-end products including the latest iPhones, iPads, MacBooks, luxury watches, and premium accessories from world-renowned brands.</p></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <HomeCard icon="check-circle" description="100% genuine products from authorized distributors" title="Authentic Products"/>
                </Col>
                <Col md="auto">
                    <HomeCard icon="clock" title="Fast Delivery" description="Island-wide delivery within 1-2 business days"/>
                </Col>
                <Col md="auto">
                    <HomeCard icon="shield-check" title="Warranty Support" description="Comprehensive warranty coverage on all products" />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>Shop with confidence at LuxuryX and experience the finest in luxury electronics. Browse our collections today and find your perfect product with our easy online ordering and fast delivery across Colombo, Negombo, and all major cities in Sri Lanka.</Col>
            </Row>
            <Footer />
        </Container>
        </>
        
    );
}

export default Home;
