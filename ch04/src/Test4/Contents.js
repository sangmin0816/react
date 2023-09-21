import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'react-bootstrap/components/ExampleCarouselImage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Contents = () => {
  return (
    <>
    <Container>
      <Carousel>
         <Carousel.Item>
         {/* <ExampleCarouselImage text="First slide" /> */}
         <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         {/* <ExampleCarouselImage text="Second slide" /> */}
         <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
         {/* <ExampleCarouselImage text="Third slide" /> */}
         <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
         </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
      <Container>
         <Row>
         <Col>1 of 1</Col>
         </Row>
      </Container>
      <Table striped bordered hover>
         <thead>
         <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
         </tr>
         <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
         </tr>
         <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
         </tr>
         </tbody>
      </Table>
      <Pagination>{items}</Pagination>
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>

      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
         Submit
         </Button>
      </Form>
    </Container>
    </>
  )
}
export default Contents