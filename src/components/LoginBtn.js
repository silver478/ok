import React from "react";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <button type="button" class="buttonL">
      <Link to="/login">
        <span> Login </span>
      </Link>
    </button>
  );
}

export default LoginBtn;
