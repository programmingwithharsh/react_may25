import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function CarouselExample() {
  return (<>
    <h1>Carousel Example</h1>
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage image="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  );
}

export default CarouselExample;