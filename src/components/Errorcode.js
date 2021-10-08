import React from "react";
import error from "./error.jpg";

export default function Errorcode() {
  return (
    <div className="container d-flex justify-content-center">
      <img src={error} alt="" 
      height="150px"
      width="150px"
      />
    </div>
  );
}
