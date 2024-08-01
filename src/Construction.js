import { NavLink } from "react-router-dom";

import "./Construction.css";

export default function construction() {
  return (
    <div className="construct">
      <h1>
        The Website is under construction right now, please give us a few days
      </h1>
      <div className="btns">
        <NavLink to="/Register">
          <button>REGISTER</button>
        </NavLink>
        <NavLink to="/Brochure">
          <button>BROCURE</button>
        </NavLink>
        <NavLink to="/Teaser">
          <button>TEASER</button>
        </NavLink>
      </div>
    </div>
  );
}
