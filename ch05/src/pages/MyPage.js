import {Navigate} from 'react-router-dom';

import Container from "react-bootstrap/Container";

const MyPage = () => {
   const isLoggedIn = false;

   if(!isLoggedIn){
      return <Navigate to="/login" replace={true} />;
   }

  return (
    <>
    <Container>
      <h1>마이페이지</h1>
    </Container>
    </>
  )
}
export default MyPage;