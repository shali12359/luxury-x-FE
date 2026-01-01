import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { categoryApi } from "../api/CategoryApi";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoryApi.getAll();
                setCategories(data.data);
                console.log(data);
            }
            catch(err) {
                console.log("Error: " + err);
            }
        }

        fetchCategories();
    }, []);
    
    return (
        <>
           <Container className="mt-5">
                <Row>
                    <Col className="text-center"><h3>Categories</h3></Col>
                </Row>
                <Row>
                    {
                        categories.map((category) => (
                            <Col>
                                <CategoryCard icon={category.icon} name={category.name} description={category.description} />
                            </Col>
                        ))
                    }
                </Row>
            </Container> 
           <Footer />
        </>
    )
}

export default Categories;