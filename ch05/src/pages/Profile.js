import { useParams } from 'react-router-dom';

import Container from "react-bootstrap/Container";

const data = {
   student: {
      name: '김1',
      description: 'Student',
      image: require('../images/cat-roomba-exceptionally-fast.gif')
   },
   teacher: {
      name: '김2',
      description: 'Teacher',
      image: require('../images/catnotebook.gif')
   },
   parent: {
      name: '김3',
      description: 'Parent',
      image: require('../images/coding_8bit.gif')
   },
};

const Profile = () => {
   const params = useParams();
   const profile = data[params.username];

  return (
    <>
      <Container>
      <h1>Profile</h1>
      {profile ? (
         <>
         <p>{params.username}</p>
         <p>{profile.name}</p>
         <p>{profile.description}</p>
         <img src={profile.image}/>
         </>
      ) : (<>
      <p>존재하지 않습니다.</p>
      <img src="https://media3.giphy.com/media/2diikD1pjX8X9tZkft/200w.gif?cid=6c09b952wbtxs5tzonmx6ceh4c8h2yd28e8518fwcpluwuty&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
      </>)}
      </Container>
    </>
  );
};

export default Profile;
