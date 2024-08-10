import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<SingleMovie />}></Route>
          <Route path="/*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;