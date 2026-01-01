import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from "../components/ProductCard";
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import { ProductApi } from "../api/ProductApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState("Price");
    const [selectedArrival, setSelectedArrival] = useState("Arrival");
    const [filters, setFilters] = useState({
        minPrice: undefined,
        maxPrice: undefined,
        fromDate: undefined,
        toDate: undefined,
        categoryName: categoryName
    });

    const handlePriceFilterChange = (value) => {
        setSelectedPriceRange(value);
    
        setFilters(prev => {
            switch (value) {
                case "LKR 40,000 - 100,000":
                    return { ...prev, minPrice: 40000, maxPrice: 100000 };
                case "LKR 100,000 - 300,000":
                    return { ...prev, minPrice: 100000, maxPrice: 300000 };
                case "Above LKR 300,000":
                    return { ...prev, minPrice: 300000, maxPrice: undefined };
                default:
                    return { ...prev, minPrice: undefined, maxPrice: undefined };
            }
        });
    };    

    const handleArrivalFilterChange = (value) => {
        setSelectedArrival(value);
    
        const today = new Date();
    
        setFilters(prev => {
            switch (value) {
                case "Newest":
                    return {
                        ...prev,
                        fromDate: new Date(today.setDate(today.getDate() - 7))
                            .toISOString().split("T")[0],
                        toDate: undefined
                    };
                case "Oldest":
                    return {
                        ...prev,
                        fromDate: undefined,
                        toDate: new Date().toISOString().split("T")[0]
                    };
                default:
                    return {
                        ...prev,
                        fromDate: undefined,
                        toDate: undefined
                    };
            }
        });
    };
       
    const hasActiveFilters = () => {
        return (
            filters.minPrice !== undefined ||
            filters.maxPrice !== undefined ||
            filters.fromDate !== undefined ||
            filters.toDate !== undefined
        );
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
    
                if (hasActiveFilters()) {
                    response = await ProductApi.filterByPriceOrArrival(
                        filters.minPrice,
                        filters.maxPrice,
                        filters.fromDate,
                        filters.toDate,
                        categoryName
                    );
                } else {
                    response = await ProductApi.getByCategoryName(categoryName);
                }
                
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.log("Error fetching products:", err);
            }
        };
    
        fetchData();
    }, [
        categoryName,
        filters.minPrice,
        filters.maxPrice,
        filters.fromDate,
        filters.toDate
    ]);
    

    return (
        <>
           <Container className="mt-5">
                <Row>
                    <Col className="text-center mb-2"><h3>{categoryName}</h3></Col>
                </Row>
                <Row className="mt-3 mb-5 justify-content-md-center">
                    {/* <Col md="auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manufacturer
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Apple</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Samsung</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Xiomi</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                    </Col> */}
                    <Col md="auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {selectedPriceRange}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handlePriceFilterChange('Price')}>Price</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlePriceFilterChange('LKR 40,000 - 100,000')}>LKR 40,000 - 100,000</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlePriceFilterChange('LKR 100,000 - 300,000')}>LKR 100,000 - 300,000</Dropdown.Item>
                                <Dropdown.Item onClick={() => handlePriceFilterChange('Above LKR 300,000')}>Above LKR 300,000</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>     
                    </Col>
                    <Col md="auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {selectedArrival}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleArrivalFilterChange('Arrival')}>Arrival</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleArrivalFilterChange('Newest')}>Newest</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleArrivalFilterChange('Oldest')}>Oldest</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    {
                        products.map((product) => (
                            <Col md="auto mt-3 mb-5">
                                <ProductCard id={product.id} name={product.name} image={product.image} price={product.price}/>
                            </Col>
                        ))
                    }
                </Row>
                {/* <Row className="mt-5 justify-content-md-center">
                    <Col md="auto">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                    </Col>
                </Row> */}
            </Container> 
           <Footer />
        </>
    )
}

export default Products;