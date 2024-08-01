import "./App.css";

import NavBar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Team from "./Team";
import EventList from "./EventList";
import Contact from "./Contact";
import Construction from "./Construction.js";

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
        ={" "}
        <div className="App">
          <Routes>
            <Route path="/" element={<Construction />} />
            {/*<Route path="/Events" element={<EventList />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />*/}
            <Route
              path="/Register"
              element={
                <ExternalRedirect to="https://forms.gle/CTaJthVc6Vz7hePs9" />
              }
            />
            <Route
              path="/Brochure"
              element={
                <ExternalRedirect to="https://drive.google.com/file/d/1j71EEUz4aIcSUUFUfbK-FdbUJ39z7kuB/view" />
              }
            />
            <Route
              path="/Teaser"
              element={
                <ExternalRedirect to="https://drive.google.com/file/d/1fSFA3EV-JXezE7LG5N8XXjb11S2tKzXM/view  " />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
