import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
// import Carousel from "../component/Carousel";

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div class="carousel-inner" id='carousel'>
    <div class="carousel-caption" style={{zIndex:"10"}}>


    <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>


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
</div></div>
      <div className="container">
        {
          foodCat.length > 0 ?
            foodCat.map((data) => {
              return (
                <div key={data._id}>
                  <div className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  <div className="d-flex flex-wrap justify-content-start">
                    {foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className="m-3">
                            <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                          
                            ></Card>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
            : <div>No Data Found</div>
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
