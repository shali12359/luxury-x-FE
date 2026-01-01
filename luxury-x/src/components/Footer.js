import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
             <Container className='mt-5' style={{ backgroundColor: '#eceff1', height:'260px' }}>
            <Row>
                <Col className='mt-4'>
                    <h5>LuxuryX</h5>
                    <ul className="mt-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li className='mt-4'><b>LUXURYX (Pvt) Ltd.</b><br/>
                            No 525, Union Place, Colombo-02.
                        </li>
                        <li className='mt-3'>
                            <b>Showrooms are open:</b><br/>
                            (Mon - Sat) 09.30 am to 07.00 pm
                            (Sun) 10.00 am to 05.00 pm
                        </li>
                    </ul>
                </Col>
                <Col className='mt-4'>
                    <h5 className="mb-4">Top Collections</h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>iPhone</li>
                        <li>iPad</li>
                        <li>MacBook</li>
                        <li>Watches</li>
                        <li>Airpods</li>
                        <li>Accessories</li>
                    </ul>
                </Col>
                <Col className='mt-4'>
                    <h5 className="mb-4">Useful Links</h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Return Policy</li>
                    </ul>
                </Col>
                <Col className='mt-4'>
                    <h5 className="mb-4">Contact us</h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><i className="bi bi-telephone"></i> +94-70 733 3533</li>
                        <li><i className="bi bi-telephone"></i> +94-70 733 3633</li>
                        <li><i className="bi bi-telephone"></i> +94-70 733 3634</li>
                        <li><i className="bi bi-telephone"></i> +94-77 788 7447</li>
                        <li><i className="bi bi-envelope"></i> luxuryx@outlook.com</li>
                        <li><i className="bi bi-facebook"></i> Luxury X</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Row className='text-center mt-4 mb-3'>
            <Col>© 2025 LUXURYX (Pvt) Ltd. All rights reserved.</Col>
        </Row>
        </>
    );
}

export default Footer;