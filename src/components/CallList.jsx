import React from "react";
import {Link} from "react-router-dom";

const CallList = () => {
  return (
    <div>
      <h1>CallList</h1>
        <Link to="/call">Go to call</Link>
    </div>
  );
};

export default CallList;