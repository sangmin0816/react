import {  Outlet, NavLink } from "react-router-dom";
// Link와 달리 NavLink에서는 조건을 사용할 수 있다.

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Aritcles = () => {
  return (
    <>
      <Container>
        <h1>Aritcles</h1>

        <ListGroup>
          <ArticleItem id={1} />
          <ArticleItem id={2} />
          <ArticleItem id={3} />
        </ListGroup>
        <Outlet />
      </Container>
    </>
  );
};

const ArticleItem = ({id}) => {
  const activeStyle = {
    color: "pink",
    fontSize: 20,
  };
  
  return (
    <ListGroup.Item>
      <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 {id}</NavLink>
    </ListGroup.Item>
  );
};

export default Aritcles;
