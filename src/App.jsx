import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import SongList from "./components/SongList";

const App = () => {
  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/photos/Tim.png" },
    { name: "Scott King", photo: "photos/photos/King.png" },
    { name: "Johnny Pike", photo: "photos/photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/photos/Toby.jpg" },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About title={"여우와 늙다리들"} />}></Route>
          <Route path="/members" element={<Members members={members} />}></Route>
          <Route path="/songs" element={<SongList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
