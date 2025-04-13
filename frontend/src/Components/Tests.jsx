import React from "react";
import "../styles/Tests.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


const Tests = () => {
  

  return (
    <>
      <Navbar />
    <div className="blocks">
      <div id="TodayTests">
        <h2>Today Tests</h2>
        <Link to="/testPage">Physics Unit-1 </Link>
      </div>
      <div id="PastTests">
        <h2>Past Tests</h2>
      </div>
      <div id = "Rank">
        <h2>Test Rank</h2>
      </div>
    </div>
      
    </>
  );
};

export default Tests;
