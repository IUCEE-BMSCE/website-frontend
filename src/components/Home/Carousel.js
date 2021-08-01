import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import carouselData from "../carousel-data.json";
import "./Carousel.css";

const Carousel = (props) => {
  return (
    <Bucket>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselData.map((carouseldata) => {
            if (carouseldata.id === 1) {
              return (
                <div className="carousel-item active" key={carouseldata.id}>
                  <img
                    src={"/home-banners/" + carouseldata.poster}
                    className="d-block w-100 home-carousel"
                    alt={carouseldata.poster}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{carouseldata.name}</h5>
                    <p>{carouseldata.description}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item " key={carouseldata.id}>
                  <img
                    src={"/home-banners/" + carouseldata.poster}
                    className="d-block w-100 home-carousel"
                    alt={carouseldata.poster}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{carouseldata.name}</h5>
                    <p>{carouseldata.description}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      </Bucket>
  );
};
const Bucket = styled.div`
  position: relative;
`;
export default Carousel;
