import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function CarouselMain() {
  return (
    <div className="mt-4">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src="/images/phone.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Iphone 17</h3>
            <p>Experience premium innovation with the latest iPhone from LuxuryX, featuring sleek design, powerful performance, and advanced cameras for effortless everyday use.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src="/images/watch.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Watch</h3>
            <p>Buy Samsung Galaxy Watch 6 40MM for the best price in Sri Lanka.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src='/images/laptop.jpg'
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Laptop</h3>
            <p>Power your productivity with top-quality laptops from LuxuryX, offering sleek designs, fast performance, and reliable features for work, study, and entertainment.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselMain;