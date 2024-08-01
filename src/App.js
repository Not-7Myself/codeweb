import "./App.css";

import NavBar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Team from "./Team";
import EventList from "./EventList";
import Contact from "./Contact";

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import Home from "./components/Home";
import "./App.css";

const ExternalRedirect = ({ to }) => {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<EventList />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Brochure" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route
              path="/Register"
              element={
                <ExternalRedirect to="https://forms.gle/CTaJthVc6Vz7hePs9" />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
