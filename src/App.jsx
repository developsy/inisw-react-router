import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import SongList from "./components/SongList";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/songs" element={<SongList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
