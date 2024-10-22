import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import People from "./components/People";
import Person from "./components/Person";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import{staff} from './components/data/staff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<People staff={staff}/>}>
            <Route path=":personId" element={<Person staff={staff} />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
