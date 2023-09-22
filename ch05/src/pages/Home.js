import { Link } from "react-router-dom";
// react에서는 a 태그보다 link 사용

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
  return (
    <>
      <Container>
        <h1>Home</h1>

        <ListGroup>
          <ListGroup.Item><Link to="/about">Go to About</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/profile/student">Go to Profile student</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/profile/teacher">Go to Profile teacher</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/profile/parent">Go to Profile parent</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/profile/none">Go to Profile none</Link></ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};
export default Home;
