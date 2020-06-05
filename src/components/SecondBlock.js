import React from "react";

function SecondBlock() {
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="./images/CardImage1.png" alt="CardImage1" />
            <h3>Design</h3>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>ABOUT SECTION</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="./images/CardImage2.png" alt="CardImage2" />
            <h3>Code</h3>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>CONTACT US SECTION</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="./images/CardImage3.png" alt="CardImage3" />
            <h3>Launch</h3>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>CAREER SECTION</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;
