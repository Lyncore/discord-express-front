import React, { useMemo } from "react";
import { Button, Col } from "react-bootstrap";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Controls from "./components/controls/Controls";
import Header from "./components/header/Header";
import Home from "./components/Home";
import useSettingsHandler from "./utils/settings.handler";

function App() {
  const [settings, setSettings] = useSettingsHandler();
  return (
    <Col className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/controls" element={<Controls />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Col>
  );
}

export default App;
