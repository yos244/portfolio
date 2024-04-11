import React from "react";
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className="LeftNav">
      <ul>
        <li>
          <Link to="/background">Background</Link>
        </li>
        <li>
          <Link to="/video">Lightining Talk Video</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftNav;
