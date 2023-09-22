import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

const Aritcle = () => {
  const { id } = useParams();

  return (
    <>
      <Container>
        <h2>Aritcle Clicked {id}</h2>
        <p>내용</p>
      </Container>
    </>
  );
};
export default Aritcle;
