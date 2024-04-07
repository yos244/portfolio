import React from "react";
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className="LeftNav">
      <ul>
        <li>
          <Link to="/">Background</Link>
        </li>
        <li>
          <Link to="/about">Video  </Link>
        </li>
        <li>
          <Link to="/about">Pictures </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNav;
