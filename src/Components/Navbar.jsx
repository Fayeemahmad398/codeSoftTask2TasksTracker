/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import "../Style/navbar.css";
import logo from "../assets/tasktracker.png"
import { CiGrid41,CiGrid2H,CiSearch } from "react-icons/ci";

function Navbar({ setSearchTerm, isGrid, setGrid }) {
    
  return (
    <div className="navbar">
      <div className="img-box">
        <img src={logo} alt="" />
        <h3>Task Tracker</h3>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Search by task or status"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <CiSearch className="icon-search" />
      </div>
      <div>
        {!isGrid ? (
          <CiGrid2H onClick={() => setGrid(true)} className="icons-grids" />
        ) : (
          <CiGrid41 onClick={() => setGrid(false)} className="icons-grids" />
        )}
      </div>
    </div>
  );
}
export default Navbar;
