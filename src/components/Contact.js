import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div className="container m">
        <div className="thb text-center">
          <p>I'm Ankit Malakar, a CSE student of RCCIIT, Kolkata...</p>
          <p>
          For more details you may visit my github profile. My github id is given below.
          </p>
          <p>Thank you.</p>
        </div>
        <div className="sm">
          <a href="https://github.com/ankitmalakar7">
            <i class="fab fa-github-square"></i>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
