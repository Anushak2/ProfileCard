import React from "react";
import Img from "./Img.jpg";

function App() {
  return (
    <div>
      <h2 className="topic" style={{ textAlign: "center" }}>
        User Profile Card
      </h2>
      <div class="card">
        <img
          className="image"
          src={Img}
          alt="Anusha K"
          style={{ width: "100%" }}
        />

        <p className="name"> ANUSHA K </p>

        <p className="title"> FRONT END DEVELOPER </p>

        <p className="location"> 📍 BANGALORE, INDIA </p>

        <a href="https://twitter.com/AnushaK99771178">
          <i class="fa fa-twitter"> </i>
        </a>

        <a href="https://www.instagram.com/anu__sanju__/">
          <i class="fa fa-instagram"> </i>
        </a>

        <a href="https://www.linkedin.com/in/anusha-k-36904/">
          <i class="fa fa-linkedin"></i>
        </a>

        <a href="https://github.com/Anushak2">
          <i class="fa fa-github"></i>
        </a>

        <p>
          <a href="tel: 9600636904" class="button">
            Contact
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
