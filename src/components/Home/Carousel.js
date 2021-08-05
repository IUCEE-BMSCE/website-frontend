import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import carouselData from "../carousel-data.json";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <Bucket>
      <div
        className="carousel slide carousel-dark carousel-fade "
        data-bs-ride="carousel"
      >
        
        <div className="carousel-inner">
          {carouselData.map((carouseldata) => {
            if (carouseldata.id === 1) {
              return (
                <div className="carousel-item active" data-bs-interval="4000" key={carouseldata.id}>
                  <img
                    src={"/home-banners/" + carouseldata.poster}
                    className="d-block w-100 home-carousel"
                    alt={carouseldata.poster}
                  />
                </div>
              );
            } else {
              return (
                <div className="carousel-item" data-bs-interval="3000" key={carouseldata.id}>
                  <img
                    src={"/home-banners/" + carouseldata.poster}
                    className="d-block w-100 home-carousel"
                    alt={carouseldata.poster}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <hr />
      </Bucket>
  );
};
const Bucket = styled.div`
  position: relative;
`;
export default Carousel;
