import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./App.scss"

import React, {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />

          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>

          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>

        {/* 에러 페이지 */}
        <Route path="*" element={<>Not Found</>}/>
      </Routes>
    </Router>
  );
}

export default App;
