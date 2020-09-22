import React from "react"

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style={{ height: "400px", objectFit: "contain" }} src="https://2e8ram2s1li74atce18qz5y1-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Coding-Bootcamp-Ratings-Dice-1920x1200.png" class="d-block w-100" alt="Teaching code" />
          <div class="carousel-caption d-none d-md-block">

            <h4 style={{ color: "#0a7496" }}>Full-time mentoring and code alongs to make sure you understand key concepts.</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img style={{ height: "400px", width: "400px", objectFit: "contain" }} src="http://kids.gocodemy.com/img/codingguy.png" class="d-block w-100" alt="Learning code" />
          <div class="carousel-caption d-none d-md-block">

            <h4 style={{ color: "#0a7496" }}>Do extra research, learn courses and peak your curiosity.</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img style={{ height: "400px", objectFit: "contain" }} src="https://www.pngkey.com/png/full/43-435278_free-fire-vector-art-icon.png" class="d-block w-100" alt="Rocket taking off" />
          <div class="carousel-caption d-none d-md-block">

            <h4 style={{ color: "#0a7496" }}>Complete build week, increase your clout, and take your career to the next level.</h4>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  )
}
