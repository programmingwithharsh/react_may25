import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
    return (
        <>
            <h1>Card Example</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71BY+Xg9OuL._AC_UY218_.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardExample;