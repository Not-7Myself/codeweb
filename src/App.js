import "./App.css";

import NavBar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Team from "./Team";
import EventList from "./EventList";
import Contact from "./Contact";

import { data } from "./data1";

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
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<EventList />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Events">
              {data.map((data) => {
                return (
                  <Route path={data.link} element={<Event data={data} />} />
                );
              })}
            </Route>
            <Route
              path="/Register"
              element={
                <ExternalRedirect to="https://forms.gle/CTaJthVc6Vz7hePs9" />
              }
            />
            <Route
              path="/Brochure"
              element={
                <ExternalRedirect to="https://drive.google.com/file/d/1UTLDgdUTrdRqdYmkA-iEFqxFueHA_oOS/view" />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
