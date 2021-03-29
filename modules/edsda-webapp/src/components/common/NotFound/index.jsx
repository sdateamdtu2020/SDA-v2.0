import React from "react";
import "./style.css";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="body">
      <div className="mainbox">
        <div className="err">4</div>
        <FaQuestionCircle className="far" />
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{" "}
            <Link to="/" className="a">
              home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
