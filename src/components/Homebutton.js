import React from "react";
import {Link}  from 'react-router-dom'
function Homebutton() {
  return (
    <button type="button" class="button">
      <Link to='/'>
        <span> Home </span>
        </Link>
    </button>
  );
}

export default Homebutton;
