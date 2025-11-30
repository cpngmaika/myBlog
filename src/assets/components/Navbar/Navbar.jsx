import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-brand">CPNGMAIKA</div>

      <ul className="nav-menu">
        <li><i class="fa-solid fa-house"></i><a href="#">Home</a></li>
        <li><i class="fa-solid fa-box-archive"></i><a href="#">Archive</a></li>
        <li><a href="https://github.com/cpngmaika"><i class="fa-brands fa-github"></i>Github</a></li>
      </ul>

      <form className="nav-search">
        <input type="text" placeholder="Search" />
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
      </form>
    </nav>
  );
}

export default Navbar;