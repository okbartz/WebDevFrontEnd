import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import People from "./components/People"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element= {<People/>}>
        <Route path=":personId" element={<Person staff={staff} />} />
        </Route>
        </Route>
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
