import React from 'react';

export default function Carousel() {
  return (
    <div>
     <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div class="carousel-inner" id='carousel'>
    <div class="carousel-caption" style={{zIndex:"10"}}>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg" class="d-block w-100" style ={{filter: "brightness(30%)"}} alt="burger"/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" class="d-block w-100" style ={{filter: "brightness(30%)"}} alt="pizza"/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" class="d-block w-100" style ={{filter: "brightness(30%)"}} alt="panner tikka"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
