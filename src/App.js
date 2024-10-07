import "./App.css";

import NavBar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Team from "./Team";
import EventList from "./EventList";
import Contact from "./Contact";
import Footer from "./footer";
import Brochure from "./Brochure";
import Register from "./Register";
import Results from "./Results";

import { data } from "./data1";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

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
            <Route path="/Register" element={<Register />} />
            <Route path="/Brochure" element={<Brochure />} />
            <Route path="/Prelims" element={<ExternalRedirect />} />
            <Route path="/Results" element={<Results />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
function ExternalRedirect() {
  React.useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/19z3of86A8g-dPFmEuLYu3Sp4ZL2JwoSj/view?usp=sharing";
  }, []);

  return <p>Redirecting...</p>;
}

export default App;
