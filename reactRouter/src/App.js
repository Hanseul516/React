import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className='App'>
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        {/* 라우트가 일치하지 않을 때의 처리는 아래와 같이 수정할 수 있습니다. */}
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
