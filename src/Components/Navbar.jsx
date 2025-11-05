import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <h1>Phone Cart</h1>
          <div className="nav icon">
            <Link to='/'><h3 className="icon">🛒</h3></Link>
            <span>0</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
