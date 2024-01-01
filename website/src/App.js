import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience/>} />
          <Route path="about-me" element={<About/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
