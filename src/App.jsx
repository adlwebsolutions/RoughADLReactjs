import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postTitle/:postId" element={<SinglePost />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
